import "./style.css";
import { Modal } from "react-bootstrap";
import React, { Component } from "react";
import arrow from "../../Assets/arrouw.png";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Circle from "../../Assets/stepHalfCircle.png";
import Pagination from "@material-ui/lab/Pagination";
import Circle1 from "../../Assets/rigthStepCircle.png";
import sp13 from "../../Assets/SP13_fqqk9q.jpg";
import pic1 from "../../Assets/gallery/1.png";
import pic2 from "../../Assets/gallery/2.png";
import pic3 from "../../Assets/gallery/3.png";

export default class Gallery extends Component {
  state = {
    show: false,
    index: 0,
    start: 0,
    page: 1,
    end: 28,
    list: [
      pic1,
      pic2,
      pic3,
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939872/future2_ep7kgr.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939870/future3.6_o2z0sp.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939870/future1_rfdr2a.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939870/future5_cgc9sq.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939869/future4.3_ovjdms.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939869/future3_noeb8j.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939869/future3.3_wbwgch.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939869/future3.4_zaooiz.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939868/future2.4_hksbsk.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939868/future1.3_icvshj.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939868/future3.2_drvyd4.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939868/future3.1_etuq0u.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939868/future2.3_h2apan.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939868/future2.1_qkc9or.jpg",
      sp13,
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939867/futur2.2_wkt37b.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939867/future2_1_v8q6hm.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939866/future1.4_afcy6z.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939821/D2_psmxpp.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939866/family3.2_rdivqt.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939864/SP10_itfiy6.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939865/SP14_rypdhu.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939859/SP6_jqsiz7.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939866/family3.2_rdivqt.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939864/SP10_itfiy6.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939865/SP14_rypdhu.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939864/SP12_fxdqy0.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939864/SP11_ys43tp.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939863/SP9_ngfikt.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939863/SP8_daaplj.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939863/future1.2_g2s0kn.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939859/SP4_jndhyw.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939862/future1_1_uu0skg.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939860/SP7_axkd9t.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939859/SP5_jd9oxh.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939860/futur3.3_k8chzy.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939859/SP1_r5pajf.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939859/SP3_kozjrd.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939858/s24_zd3fmo.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939858/s23_wo2ng9.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939858/s26_lnsrhd.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939857/s16_fbjlio.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939858/s22_gfnzqo.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939857/s18_hrznzi.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939857/s21_yonnvi.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939858/s25_xgiz4e.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939857/s20_enowob.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939857/s19_xnuews.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939856/family4_njqvvr.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939857/s17_jmcw19.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939856/s14_gwel55.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939856/family3.3_ijxz4t.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939856/s15_mp52vr.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939855/s12_lg0por.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939856/s11_znkssw.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939855/fe0e8a76-48a7-49bc-a710-db76f5374454_uybg8w.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939855/fiver_tags.txt_torcp3.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939855/s13_pd3qu7.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939855/family3_1_ltzuxt.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939854/s10_ftq0mt.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939854/s9_kw6rhm.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939854/s7_bg5egp.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939854/s6_xkryhp.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939854/s1_y66cu3.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939853/s2_ywzz9t.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939853/s2_ywzz9t.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939854/s5_mvtcwe.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939853/s3_ygpbpa.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939853/s.5.1_ope6ee.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939852/s.1.3_gp1qyp.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939853/s.5.2_m3k88d.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939853/r7_pw0kzb.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939853/s.4.1_b2h4ap.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939852/r13_proxn8.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939852/r13_proxn8.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939852/r41.1_i0ycce.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939852/r41.1_i0ycce.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939852/family2.2_upxk0u.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939852/family2.3_xm7wgn.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939852/family2_bxn2ol.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939852/r8_qgnmin.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939851/r7.3_y2lkft.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939851/r4_ptgppe.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939851/r5_ectusg.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939851/family_abjiuk.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939851/r6_uk7jzf.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939849/r2_fhc4ge.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939849/r3_mi24ln.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939849/r3.14_s0vg1b.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939850/r4.41_xjpp2x.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939851/r4.1_wfgbrg.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939850/r4.4_ytmfmt.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939849/r3.4_kdhb9s.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939849/r3.2_myuehh.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939848/r2.1_iwbbqg.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939847/f3.2_me7iwo.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939846/r.4.5_oi6noc.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939845/r.4.2_g0rbyo.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939845/r.3.4_lopxaf.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939845/r.4.3_g0rdnc.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939845/r.4.1_gvurdu.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939844/r.3.2_gj79yi.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939848/r1_pdyin7.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939846/f2.2_naoigl.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939848/r1.1_s39muc.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939846/f2.1_nuu0bt.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939850/family1.2_cww5zb.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939850/family2_1_ik48cj.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939846/r.4.4_qmaog8.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939811/1fullbodycustom-1_720x_gjf0oe.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939847/r.6.3_klsutd.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939842/Image9_z6z8fk.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939847/r.51.3_lfahav.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939844/r.3.2.2_fiu1dv.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939843/r.3.2.1_nqnf1j.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939846/Image17_vufkgy.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939842/r.3.1.f1_n5kdro.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939848/family_3.2_hvvltd.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939843/draw-any-dragon-ball-z-character-ou-anime-for-you_1_qo9det.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939836/draw-any-dragon-ball-z-character-ou-anime-for-you_vpvvfm.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939846/Ek7PfNXgY_mid_ri0gfs.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939846/EJ1OMk67K_mid_zkv3zm.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939818/4kRtvmugY_mid_vz1mng.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939823/Image6_vt0keg.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939820/4y_K3JtXY_mid_ingkqm.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939820/418R-cCzt_mid_ft8qhp.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939819/4yhM48UQF_mid_quornn.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939820/4y_K3JtXY_mid_ingkqm.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939837/N1a1MEmgK_mid_qfzdm8.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939839/E1NHVpMbF_mid_dl1lna.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939818/4kRtvmugY_mid_vz1mng.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939816/4JaKttRfF_mid_sydzms.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939842/NygDwOt0fK_mid_q3dkku.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939816/4kRtvmufgY_mid_ddzhcu.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939843/N1X5a1QeY_mid1_t0q1b0.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939812/4JaKttRfF_mi1d_bqzufi.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939837/Drake___Niki-01_vpzlvs.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939817/4kRtvmufgY_mid1_ug1vnu.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939814/Image1_1_ywp9q2.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939819/Image2_vevhph.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939836/Image7_n9ex88.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939818/Image3_sizs0r.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939816/Image5_ithjzq.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939815/Image4_vwerfm.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939813/Image1_opxhz6.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939822/DB4_zroybj.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939812/future7_je3gtx.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939825/D3_x4zsb0.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939812/future6_1_e6van4.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939812/home_hahgd0.png",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939821/D2_psmxpp.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939826/iMazing.lnk_qi05ug.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939811/1fullbodycustom-1_720x_gjf0oe.jpg",
    ],
  };

  open = (index) => this.setState({ index, show: true });

  close = () => this.setState({ show: false });

  next = () => {
    const { list, index } = this.state;
    if (index < list.length - 1) this.setState({ index: index + 1 });
    else this.setState({ index: 0 });
  };

  prev = () => {
    const { index, list } = this.state;
    if (index > 0) this.setState({ index: index - 1 });
    else this.setState({ index: list.length - 1 });
  };

  render() {
    const { history } = this.props;
    const { show, list, index, page } = this.state;
    return (
      <div className="gallaryContainer">
        <Header History={history} />
        <img alt="" src={Circle} className="leftCircle" />
        <img alt="" src={Circle1} className="rigthCircle" />
        <div className="gallaryBox">
          <p className="gallaryTitle">Gallery</p>
          <p className="gallaryDetail">
            Watch some previous work of our great artists!
          </p>
          <hr className="gallaryhr" />
          {page == 1 && (
            <>
              <div className="gallaryPicsRow">
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(0)}
                  src={pic1}
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(1)}
                  src={pic2}
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(2)}
                  src={pic3}
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(3)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939872/future2_ep7kgr.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(4)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939870/future3.6_o2z0sp.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(5)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939870/future1_rfdr2a.jpg"
                />
                
              </div>
              <div className="gallaryPicsRow">
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(6)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939870/future5_cgc9sq.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(7)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939869/future4.3_ovjdms.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(8)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939869/future3_noeb8j.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(9)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939869/future3.3_wbwgch.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(10)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939869/future3.4_zaooiz.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(11)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939868/future2.4_hksbsk.jpg"
                />
                
              </div>
              <div className="gallaryPicsRow">
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(12)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939868/future1.3_icvshj.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(13)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939868/future3.2_drvyd4.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(14)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939868/future3.1_etuq0u.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(15)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939868/future2.3_h2apan.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(16)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939868/future2.1_qkc9or.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(17)}
                  src={sp13}
                />
                
              </div>
              <div className="gallaryPicsRow">
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(18)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939867/futur2.2_wkt37b.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(19)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939867/future2_1_v8q6hm.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(20)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939866/future1.4_afcy6z.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(21)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939859/SP6_jqsiz7.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(22)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939866/family3.2_rdivqt.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(23)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939864/SP10_itfiy6.jpg"
                />
                
              </div>
              <div className="gallaryPicsRow">
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(24)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939865/SP14_rypdhu.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(25)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939821/D2_psmxpp.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(26)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939866/family3.2_rdivqt.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(27)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939864/SP10_itfiy6.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(28)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939826/iMazing.lnk_qi05ug.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(29)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939864/SP12_fxdqy0.jpg"
                />
                
              </div>
            </>
          )}
          {page == 2 && (
            <>
              <div className="gallaryPicsRow">
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(30)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939864/SP11_ys43tp.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(31)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939863/SP9_ngfikt.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(32)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939863/SP8_daaplj.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(33)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939863/future1.2_g2s0kn.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(34)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939859/SP4_jndhyw.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(35)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939862/future1_1_uu0skg.jpg"
                />
                
              </div>
              <div className="gallaryPicsRow">
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(36)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939860/SP7_axkd9t.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(37)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939859/SP5_jd9oxh.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(38)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939860/futur3.3_k8chzy.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(39)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939859/SP1_r5pajf.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(40)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939859/SP3_kozjrd.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(41)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939858/s24_zd3fmo.jpg"
                />
                
              </div>
              <div className="gallaryPicsRow">
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(42)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939858/s23_wo2ng9.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(43)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939858/s26_lnsrhd.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(44)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939857/s16_fbjlio.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(45)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939858/s22_gfnzqo.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(46)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939857/s18_hrznzi.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(47)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939857/s21_yonnvi.jpg"
                />
                
              </div>
              <div className="gallaryPicsRow">
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(48)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939858/s25_xgiz4e.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(49)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939857/s20_enowob.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(50)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939857/s19_xnuews.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(51)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939856/family4_njqvvr.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(52)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939857/s17_jmcw19.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(53)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939856/s14_gwel55.jpg"
                />
                
              </div>
              <div className="gallaryPicsRow">
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(54)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939856/family3.3_ijxz4t.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(55)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939856/s15_mp52vr.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(56)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939855/s12_lg0por.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(57)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939856/s11_znkssw.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(58)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939855/fe0e8a76-48a7-49bc-a710-db76f5374454_uybg8w.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(59)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939855/fiver_tags.txt_torcp3.jpg"
                />
                
              </div>
            </>
          )}

          {page == 3 && (
            <>
              <div className="gallaryPicsRow">
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(60)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939855/s13_pd3qu7.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(61)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939855/family3_1_ltzuxt.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(62)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939854/s10_ftq0mt.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(63)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939854/s9_kw6rhm.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(64)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939854/s7_bg5egp.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(65)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939854/s6_xkryhp.jpg"
                />
                
              </div>
              <div className="gallaryPicsRow">
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(66)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939854/s1_y66cu3.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(67)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939853/s2_ywzz9t.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(68)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939853/s2_ywzz9t.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(69)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939854/s5_mvtcwe.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(70)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939853/s3_ygpbpa.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(71)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939853/s.5.1_ope6ee.jpg"
                />
                
              </div>
              <div className="gallaryPicsRow">
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(72)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939852/s.1.3_gp1qyp.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(73)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939853/s.5.2_m3k88d.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(74)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939853/r7_pw0kzb.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(75)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939853/s.4.1_b2h4ap.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(76)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939852/r13_proxn8.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(77)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939852/r13_proxn8.jpg"
                />
                
              </div>
              <div className="gallaryPicsRow">
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(78)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939852/r41.1_i0ycce.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(79)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939852/r41.1_i0ycce.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(80)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939852/family2.2_upxk0u.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(81)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939852/family2.3_xm7wgn.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(82)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939852/family2_bxn2ol.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(83)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939852/r8_qgnmin.jpg"
                />
                
              </div>
            </>
          )}

          {page == 4 && (
            <>
              <div className="gallaryPicsRow">
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(84)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939851/r7.3_y2lkft.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(85)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939851/r4_ptgppe.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(86)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939851/r5_ectusg.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(87)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939851/family_abjiuk.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(88)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939851/r6_uk7jzf.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(89)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939849/r2_fhc4ge.jpg"
                />
                
              </div>
              <div className="gallaryPicsRow">
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(90)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939849/r3_mi24ln.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(91)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939849/r3.14_s0vg1b.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(92)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939850/r4.41_xjpp2x.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(93)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939851/r4.1_wfgbrg.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(94)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939850/r4.4_ytmfmt.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(95)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939849/r3.4_kdhb9s.jpg"
                />
                
              </div>
              <div className="gallaryPicsRow">
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(96)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939849/r3.2_myuehh.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(97)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939848/r2.1_iwbbqg.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(98)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939847/f3.2_me7iwo.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(99)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939846/r.4.5_oi6noc.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(100)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939845/r.4.2_g0rbyo.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(101)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939845/r.3.4_lopxaf.jpg"
                />
                
              </div>
              <div className="gallaryPicsRow">
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(102)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939845/r.4.3_g0rdnc.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(103)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939845/r.4.1_gvurdu.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(104)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939844/r.3.2_gj79yi.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(105)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939848/r1_pdyin7.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(106)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939846/f2.2_naoigl.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(107)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939848/r1.1_s39muc.jpg"
                />
                
              </div>
            </>
          )}

          {page == 5 && (
            <>
              <div className="gallaryPicsRow">
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(108)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939846/f2.1_nuu0bt.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(109)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939850/family1.2_cww5zb.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(110)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939850/family2_1_ik48cj.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(111)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939846/r.4.4_qmaog8.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(112)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939811/1fullbodycustom-1_720x_gjf0oe.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(113)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939847/r.6.3_klsutd.jpg"
                />
                
              </div>
              <div className="gallaryPicsRow">
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(114)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939842/Image9_z6z8fk.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(115)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939847/r.51.3_lfahav.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(116)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939844/r.3.2.2_fiu1dv.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(117)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939843/r.3.2.1_nqnf1j.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(118)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939846/Image17_vufkgy.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(119)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939842/r.3.1.f1_n5kdro.jpg"
                />
                
              </div>
              <div className="gallaryPicsRow">
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(120)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939848/family_3.2_hvvltd.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(121)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939843/draw-any-dragon-ball-z-character-ou-anime-for-you_1_qo9det.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(122)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939836/draw-any-dragon-ball-z-character-ou-anime-for-you_vpvvfm.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(123)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939846/Ek7PfNXgY_mid_ri0gfs.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(124)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939846/EJ1OMk67K_mid_zkv3zm.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(125)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939818/4kRtvmugY_mid_vz1mng.jpg"
                />
                
              </div>
              <div className="gallaryPicsRow">
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(126)}
                  // src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939819/4yhM48UQF_mid_quornn.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(127)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939820/4y_K3JtXY_mid_ingkqm.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(128)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939820/418R-cCzt_mid_ft8qhp.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(129)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939823/Image6_vt0keg.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(130)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939820/4y_K3JtXY_mid_ingkqm.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(131)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939837/N1a1MEmgK_mid_qfzdm8.jpg"
                />
                
              </div>
            </>
          )}

          {page == 6 && (
            <>
              <div className="gallaryPicsRow">
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(132)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939839/E1NHVpMbF_mid_dl1lna.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(133)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939818/4kRtvmugY_mid_vz1mng.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(134)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939816/4JaKttRfF_mid_sydzms.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(135)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939842/NygDwOt0fK_mid_q3dkku.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(136)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939816/4kRtvmufgY_mid_ddzhcu.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(137)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939843/N1X5a1QeY_mid1_t0q1b0.jpg"
                />
                
              </div>
              <div className="gallaryPicsRow">
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(138)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939812/4JaKttRfF_mi1d_bqzufi.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(139)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939837/Drake___Niki-01_vpzlvs.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(140)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939817/4kRtvmufgY_mid1_ug1vnu.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(141)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939814/Image1_1_ywp9q2.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(142)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939819/Image2_vevhph.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(143)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939836/Image7_n9ex88.jpg"
                />
                
              </div>
              <div className="gallaryPicsRow">
              <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(144)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939818/Image3_sizs0r.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(145)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939816/Image5_ithjzq.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(146)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939815/Image4_vwerfm.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(147)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939813/Image1_opxhz6.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(148)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939822/DB4_zroybj.jpg"
                />
                <img
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(149)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939812/future7_je3gtx.jpg"
                />
               
              </div>
            </>
          )}
          {page == 7 && (
            <>                
              <div className="gallaryPicsRow" style={{justifyContent:"left"}}>
               
                <img
                  style={{margin: "0px 10px"}}
                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(150)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939825/D3_x4zsb0.jpg"
                />
                <img
                  style={{margin: "0px 10px"}}

                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(151)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939812/future6_1_e6van4.jpg"
                />
                <img
                  style={{margin: "0px 10px"}}

                  alt=""
                  loading="lazy"
                  className="gallaryImg"
                  onClick={() => this.open(152)}
                  src="https://res.cloudinary.com/dapozvnbr/image/upload/v1599939812/home_hahgd0.png"
                />
              </div>
            </>
          )}

          <div className="paginationBox">
            <Pagination
              count={7}
              variant="text"
              shape="rounded"
              onChange={(e, i) => this.setState({ page: i })}
            />
          </div>
        </div>

        <Modal show={show} onHide={this.close} className="ModelContainer">
          <Modal.Body className="ModelBody">
            <img alt="" src={arrow} className="arrow1" onClick={this.prev} />
            <img alt="" src={list[index]} className="previewImg" />
            <img alt="" src={arrow} className="arrow2" onClick={this.next} />
          </Modal.Body>
        </Modal>

        <Footer History={history} />
      </div>
    );
  }
}
