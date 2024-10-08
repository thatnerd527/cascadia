/* eslint-disable no-unused-vars */
import {
  SearchWorkerMessage,
  SearchResult,
  AnggotaResult,
  AnggotaResultFoundIn,
  KelompokResult,
  KelompokResultFoundIn,
} from "./data";

// @ts-check
onmessage = function (e) {
  let starttime = new Date().getTime();
  /**
   * @type {SearchWorkerMessage}
   */
  let data = e.data;

  let result = new SearchResult();
  result.responseid = data.requestid;
  for (let kelompok of data.kelompokmaster) {
    /**
     * @type {number[]}
     */
    let foundin = [];
    if (kelompok.namamentor.toLowerCase().includes(data.query.toLowerCase())) {
      foundin.push(KelompokResultFoundIn.NAMAMENTOR);
    }
    if (foundin.length > 0) {
      let resultkelompok = new KelompokResult();
      resultkelompok.foundin = foundin;
      resultkelompok.data = kelompok;
      result.result.push(resultkelompok);
    }
  }
  for (let anggota of data.anggotamaster) {
    /**
     * @type {number[]}
     */
    let foundin = [];
    if (anggota.nama.toLowerCase().includes(data.query.toLowerCase())) {
      foundin.push(AnggotaResultFoundIn.NAMA);
    }
    if (anggota.nim.toLowerCase().includes(data.query.toLowerCase())) {
      foundin.push(AnggotaResultFoundIn.NIM);
    }
    if (anggota.jurusan.toLowerCase().includes(data.query.toLowerCase())) {
      foundin.push(AnggotaResultFoundIn.JURUSAN);
    }
    if (anggota.angkatan.toLowerCase().includes(data.query.toLowerCase())) {
      foundin.push(AnggotaResultFoundIn.ANGKATAN);
    }
    if (foundin.length > 0) {
      let resultanggota = new AnggotaResult();
      resultanggota.data = anggota;
      resultanggota.foundin = foundin;
      result.result.push(resultanggota);
    }
  }

  console.log("Search done");
  let enddtime = new Date().getTime();
  console.log("Search done in " + (enddtime - starttime) + " ms");
  postMessage(result);
};
