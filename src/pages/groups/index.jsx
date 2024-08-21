// @ts-check
import { useImmer } from "use-immer";
import { Kelompok, Anggota, AnggotaList, KelompokList } from "./data";
import React, { memo, useEffect, useState } from "react";
import KelompokItem from "../../components/groups/KelompokItem";
import { immerable } from "immer";
import KelompokItemSkeleton from "../../components/groups/KelompokItemSkeleton";
import SearchSubSection from "../../components/groups/SearchSubSection";

class PageState {
  [immerable] = true;
  /**
   * Semua kelompok yang ada, termasuk anggotanya
   * @type {KelompokList}
   * @public
   */
  semuakelompok = KelompokList.create();

  /**
   * @type {JSX.Element[]}
   */
  rendercache = [];

  /**
   * @type {KelompokList}
   */
  statecache = KelompokList.create();

  /**
   * Set ke true jika user mulai search, untuk throttle
   */
  triggersearch = true;

  showsearch = false;

  initialdatafetch = false;

  skeleton = true;
}

export class Globals {
  static StateContext = React.createContext({
    /**
     * @type {PageState | null}
     * */
    state: null,
    setState: (k) => {},
  });
}

export default function Groups() {
  /**
   * @type {[PageState, (k: PageState) => void]}
   *
   * */
  const [state, setState] = useImmer(new PageState());
  useEffect(() => {
    if (!state.initialdatafetch) {
      setState(
        /**
         * @param {PageState} draft
         * @returns {void}
         * */ (draft) => {
          draft.initialdatafetch = true;
          draft.skeleton = false;
          draft.semuakelompok = KelompokList.create();
          draft.semuakelompok.kelompok = [];
          for (let i = 0; i < 200; i++) {
            let kelompok = new Kelompok();
            kelompok.namakelompok = `Mentor K${i}`;
            kelompok.anggota = AnggotaList.create();
            kelompok.nomorkelompok = `${i}`;
            kelompok.namamentor = `Mentor ${i}`;
            kelompok.idline = `@${i}`;
            for (let j = 0; j < 10; j++) {
              let anggota = new Anggota();
              anggota.nama = `Anggota Dengan nama yang panjang ${j}`;
              anggota.nim = `${Math.floor(Math.random() * 9999999999)}`;
              anggota.jurusan = "Master of Technology Management";
              anggota.angkatan = "2024";
              kelompok.anggota.list.push(anggota);
            }
            draft.semuakelompok.kelompok.push(kelompok);
          }
        }
      );
    }
  }, [state, setState]);
  useEffect(() => {
    if (!state.initialdatafetch) {
      return;
    }
    if (state.semuakelompok.generationID !== state.statecache.generationID) {
      console.log("Resetting render cache");
      setState((draft) => {
        draft.statecache = state.semuakelompok;
        draft.rendercache = [];
      });
    } else {
      if (state.rendercache.length === state.semuakelompok.kelompok.length) {
        console.log("Top Rendering done");
        console.log(
          state.rendercache.length,
          state.semuakelompok.kelompok.length
        );
      } else {
        setTimeout(() => {
          setState((draft) => {
            let kelompok =
              state.semuakelompok.kelompok[state.rendercache.length];
            //console.log("Rendering", kelompok.anggota.list.length);
            draft.rendercache.push(
              <KelompokItem key={kelompok.namakelompok} kelompok={kelompok} />
            );
          });
        });
      }
    }
  }, [state, setState]);
  return (
    <div>
      <div className="px-4 sm:px-0 max-w-4xl mx-auto text-center xss:pt-32 xs:pt-40 md:pt-52 md:pb-15">
        <h1 className="spyagencyBoldItal font-normal text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
          GROUPS
        </h1>
        <h4 className="text-white font-medium text-lg sm:text-xl lg:text-2xl mt-1">
          MENTORING UMN 2024
        </h4>
      </div>
      <div className="h-12"></div>
      <div className="w-full mb-12 flex flex-col items-center justify-center">
        <Globals.StateContext.Provider value={{ state, setState }}>
          <SearchSubSection kelompokdata={state.statecache.kelompok} />
          <div className="h-12"></div>
          {state.rendercache.length !== state.semuakelompok.kelompok.length && (
            <>
              <div className="w-[90%] h-12 sm:w-[90%] md:w-[80%] lg:w-[75%] xl:w-[70%] 2xl:w-[65%] flex flex-row bg-white/[.25] rounded items-center justify-start text-white">
                <div className="w-4"></div>
                <div className="w-fit inline-block whitespace-nowrap">
                  Loading: {state.rendercache.length} /{" "}
                  {state.semuakelompok.kelompok.length}
                </div>
                <div className="m-4 bg-white/[.25] w-full h-8 rounded flex flex-row">
                  <div
                    className="h-full bg-teal-500 rounded"
                    style={{
                      width: `${
                        (state.rendercache.length /
                          state.semuakelompok.kelompok.length) *
                        100
                      }%`,
                    }}
                  ></div>
                </div>
              </div>
              <div className="h-12"></div>
            </>
          )}

          <div className="w-[90%] h-full sm:w-[90%] md:w-[80%] lg:w-[75%] xl:w-[70%] 2xl:w-[65%] flex flex-col">
            {state.skeleton ? (
              <KelompokItemSkeleton numberofrows={5} />
            ) : (
              state.rendercache
            )}
          </div>
        </Globals.StateContext.Provider>
      </div>
    </div>
  );
}
