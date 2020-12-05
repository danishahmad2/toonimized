import "./style.css";
import React, { Component } from "react";
import plus from "../../../Assets/plus.png";
import Steps from "../../../Components/Steps";
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";
import tick from "../../../Assets/stepTick.png";
import Gallary from "../../../Components/Gallary";
import Previous from "../../../Components/Previous";
import upload from "../../../Assets/uploadIcon.png";
import Circle from "../../../Assets/stepHalfCircle.png";
import rigthCircle from "../../../Assets/rigthStepCircle.png";
import rm_anatomyPark from "../../../Assets/Rick_and_Morty_Background_Anatomy_Park_gxkart.jpg";
import dr_dari from "../../../Assets/Dragonball_Background_Planet_Dari_evbjbe.jpg";
import Family_Guy_Background_House2 from "../../../Assets/Family_Guy_Background_House2_mnjnx7.jpg";
import family_guy_background_Bar_xzg9xh from "../../../Assets/family_guy_background_Bar_xzg9xh.jpg";
import family_guy_background_couch_v42jeh from "../../../Assets/family_guy_background_couch_v42jeh.jpg";
import Family_Guy_Background_Drunken_Clam_xgxxze from "../../../Assets/Family_Guy_Background_Drunken_Clam_xgxxze.jpg";
import Rick_and_Morty_Background_Green_Portal_o7wlz5 from "../../../Assets/Rick_and_Morty_Background_Green_Portal_o7wlz5.jpg";
import Rick_and_Morty_Background_Schwifty_jzjr74 from "../../../Assets/Rick_and_Morty_Background_Schwifty_jzjr74.jpg";
import Rick_and_Morty_background_Spaceship_yp7wpr from "../../../Assets/Rick_and_Morty_background_Spaceship_yp7wpr.jpg";
import Rick_and_Morty_Background_Windows_exqska from "../../../Assets/Rick_and_Morty_Background_Windows_exqska.jpg";
import Rick_and_Morty_Love_Portal_qggvp7 from "../../../Assets/Rick_and_Morty_Love_Portal_qggvp7.jpg";
import Futurama_Background_Cockpit_l9gmhw from "../../../Assets/Futurama_Background_Cockpit_l9gmhw.jpg";
import Futurama_Background_House_ugbqaz from "../../../Assets/Futurama_Background_House_ugbqaz.jpg";
import Futurama_Background_Retro_ssv5ff from "../../../Assets/Futurama_Background_Retro_ssv5ff.jpg";
import firebase from "../../../helper";

export default class Step1 extends Component {
  state = {
    fee: 0,
    total: 0,
    file: null,
    select: "",
    cartoon: "",
  };
  componentDidMount = () => {

    firebase.analytics().logEvent('visit_order_step_4',{}) 
    let cartoon = localStorage.getItem("selectedCartoon");
    let total = localStorage.getItem("total");
    this.setState({ cartoon, total });
  };

  handleChange = async(event) => {
    this.setState({loading:true})
    let file = event.target.files[0]
    let ref = await firebase.storage().ref( `/back/${file.name.split(' ')[0]}` )
    await ref.put(file)
    let url =await ref.getDownloadURL()
    this.setState({loading:false})

    localStorage.setItem("background", url);
    this.setState({
      fee: 20,
      select: "",
      file: url,
    });
  };

  select = ({ name, url }) => {
    this.setState({ select: [name], file: url, fee: 0 });
    localStorage.setItem("background", url);
  };

  next = () => {
    const { fee, total } = this.state;
    let price = +fee + +total;
    localStorage.setItem("total", price);
    this.props.history.push("/orderstep5");
  };

  render() {
    const { history } = this.props;
    const { select, file, cartoon } = this.state;
    return (
      <div className="stepBox1">
        <Header History={history} />
        <Steps />
        <Previous path="/orderstep3" />
        <img alt="" src={Circle} className="stepsBigCircle" />
        <img alt="" src={rigthCircle} className="rigthStepCircle" />
        <img alt="" src={plus} className="step4plus1" />
        <img alt="" src={plus} className="step4plus2" />
        <img alt="" src={plus} className="step4plus3" />
        <img alt="" src={plus} className="step4plus4" />
        <img alt="" src={plus} className="step4plus5" />
        <img alt="" src={plus} className="step4plus6" />
        <div className="stepTopData">
          <h1 className="stepDataHead">Step 4</h1>
          <h4 className="stepSubHead">Background</h4>
          <p className="stepSubHead4">
            Would you like an already beautifully crafter background, <br />
            or want to go crazy about it too?
          </p>
          <h1 className="step3SubHead4">
            Choose between our sellection
            <br />
            of backgrounds
          </h1>
        </div>

        {cartoon == "simpsons" && (
          <div className="stepGallary">
            <div className="stepGallaryRow">
              <Gallary
                name="Beach"
                state={select}
                select={this.select}
                pic="https://res.cloudinary.com/dapozvnbr/image/upload/v1600634540/simpsons/beach_czbov2.png"
              />
              <Gallary
                name="House 2"
                state={select}
                select={this.select}
                pic="https://res.cloudinary.com/dapozvnbr/image/upload/v1600634541/simpsons/gardenHome_frrmi5.png"
              />
              <Gallary
                state={select}
                name="Couch 2"
                select={this.select}
                pic="https://res.cloudinary.com/dapozvnbr/image/upload/v1600634542/simpsons/sofa_u3rmqd.png"
              />
              <Gallary
                name="Rome"
                state={select}
                select={this.select}
                pic="https://res.cloudinary.com/dapozvnbr/image/upload/v1600634541/simpsons/building_qcwbop.png"
              />
            </div>
            <div className="stepGallaryRow">
              <Gallary
                name="Camping"
                state={select}
                select={this.select}
                pic="https://res.cloudinary.com/dapozvnbr/image/upload/v1600634540/simpsons/bus_ntzjxh.png"
              />
              <Gallary
                name="Lake"
                state={select}
                select={this.select}
                pic="https://res.cloudinary.com/dapozvnbr/image/upload/v1600634541/simpsons/forest_xxryqf.png"
              />
              <Gallary
                name="Bar"
                state={select}
                select={this.select}
                pic="https://res.cloudinary.com/dapozvnbr/image/upload/v1600634541/simpsons/moes_njcljj.png"
              />
              <Gallary
                state={select}
                name="Basketball"
                select={this.select}
                pic="https://res.cloudinary.com/dapozvnbr/image/upload/v1600634540/simpsons/basket_wvdeds.png"
              />
            </div>
            <div className="stepGallaryRow">
              <Gallary
                name="Couch 1"
                state={select}
                select={this.select}
                pic="https://res.cloudinary.com/dapozvnbr/image/upload/v1600634542/simpsons/sofa2_vetsfp.png"
              />
              <Gallary
                name="Paris"
                state={select}
                select={this.select}
                pic="https://res.cloudinary.com/dapozvnbr/image/upload/v1600634541/simpsons/Eiffel_c2xnen.png"
              />
              <Gallary
                state={select}
                name="San Francisco"
                select={this.select}
                pic="https://res.cloudinary.com/dapozvnbr/image/upload/v1600634540/simpsons/bridge_zk4lc6.png"
              />
              <Gallary
                name="Stage"
                state={select}
                select={this.select}
                pic="https://res.cloudinary.com/dapozvnbr/image/upload/v1600634542/simpsons/studio_zvoda5.png"
              />
            </div>
            <div className="stepGallaryRowCenter">
              <Gallary
                name="Night"
                state={select}
                select={this.select}
                pic="https://res.cloudinary.com/dapozvnbr/image/upload/v1600634540/simpsons/apartement_xqp4c3.png"
              />
              <Gallary
                name="House 1"
                state={select}
                select={this.select}
                pic="https://res.cloudinary.com/dapozvnbr/image/upload/v1600634541/simpsons/house_quhv0x.png"
              />
            </div>
          </div>
        )}

        {cartoon == "dragon" && (
          <div className="stepGallary">
            <div className="stepGallaryRow">
              <Gallary
                name="Earth"
                state={select}
                select={this.select}
                pic="https://res.cloudinary.com/dapozvnbr/image/upload/v1600633212/Dragon/Dragonball_Background_Earth_dcjwjb.png"
              />
              <Gallary
                state={select}
                name="Kaio's Planet"
                select={this.select}
                pic={dr_dari}
              />
              <Gallary
                state={select}
                name="Karin Tower"
                select={this.select}
                pic="https://res.cloudinary.com/dapozvnbr/image/upload/v1600633210/Dragon/Dragonball_Background_Karin_Tower_dro2jd.jpg"
              />
              <Gallary
                name="Orange"
                state={select}
                select={this.select}
                pic="https://res.cloudinary.com/dapozvnbr/image/upload/v1600633209/Dragon/Dragonball_Background_Orange_u207hp.jpg"
              />
            </div>
            <div className="stepGallaryRow">
              <Gallary
                state={select}
                name="Planet Dari"
                select={this.select}
                pic="https://res.cloudinary.com/dapozvnbr/image/upload/v1600633212/Dragon/Dragonball_Background_Stadium_hxfttx.jpg"
              />
              <Gallary
                state={select}
                name="Planet Namek"
                select={this.select}
                pic="https://res.cloudinary.com/dapozvnbr/image/upload/v1600633221/Dragon/Dragonball_Background_Planet_Namek_om8a7w.jpg"
              />
              <Gallary
                name="Red"
                state={select}
                select={this.select}
                pic="https://res.cloudinary.com/dapozvnbr/image/upload/v1600633223/Dragon/Dragonball_Background_Red_zvvlmc.jpg"
              />
              <Gallary
                state={select}
                name="Stadium"
                select={this.select}
                pic="https://res.cloudinary.com/dapozvnbr/image/upload/v1600633220/Dragon/Dragonball_Background_Tiny_World_oanno6.jpg"
              />
            </div>
            <div className="stepGallaryRow">
              <Gallary
                state={select}
                name="Tiny World"
                select={this.select}
                pic="https://res.cloudinary.com/dapozvnbr/image/upload/v1600633218/Dragon/Dragonball_Capsule_rcjgcy.jpg"
              />
            </div>
          </div>
        )}

        {cartoon == "rick" && (
          <div className="stepGallary">
            <div className="stepGallaryRow">
              <Gallary
                state={select}
                name="Anatomy Park"
                select={this.select}
                pic={rm_anatomyPark}
              />
              <Gallary
                state={select}
                name="Bloody Xmas"
                select={this.select}
                pic="https://res.cloudinary.com/dapozvnbr/image/upload/v1600633624/Rick/Rick_and_Morty_Background_Bloody_Xmas_tgofzm.jpg"
              />
              <Gallary
                state={select}
                name="Green Portal"
                select={this.select}
                pic={Rick_and_Morty_Background_Green_Portal_o7wlz5}
              />
              <Gallary
                state={select}
                name="Planets"
                select={this.select}
                pic="https://res.cloudinary.com/dapozvnbr/image/upload/v1600633625/Rick/Rick_and_Morty_Background_Planets_omruc0.jpg"
              />
            </div>
            <div className="stepGallaryRow">
              <Gallary
                state={select}
                name="Purple World"
                select={this.select}
                pic="https://res.cloudinary.com/dapozvnbr/image/upload/v1600633627/Rick/Rick_and_Morty_Background_Purple_World_utimcd.jpg"
              />
              <Gallary
                state={select}
                name="Schwifty"
                select={this.select}
                pic={Rick_and_Morty_Background_Schwifty_jzjr74}
              />
              <Gallary
                state={select}
                name="Spaceship"
                select={this.select}
                pic={Rick_and_Morty_background_Spaceship_yp7wpr}
              />
              <Gallary
                name="Sun"
                state={select}
                select={this.select}
                pic="https://res.cloudinary.com/dapozvnbr/image/upload/v1600633630/Rick/Rick_and_Morty_Background_Sun_jzef61.jpg"
              />
            </div>
            <div className="stepGallaryRow">
              <Gallary
                state={select}
                name="Universe"
                select={this.select}
                pic="https://res.cloudinary.com/dapozvnbr/image/upload/v1600633627/Rick/Rick_and_Morty_Background_Universe_qy2n5n.png"
              />
              <Gallary
                name="Windows"
                state={select}
                select={this.select}
                pic={Rick_and_Morty_Background_Windows_exqska}
              />
              <Gallary
                state={select}
                name="Green Forg"
                select={this.select}
                pic="https://res.cloudinary.com/dapozvnbr/image/upload/v1600633628/Rick/Rick_and_Morty_Green_Forg_l6zadt.jpg"
              />
              <Gallary
                state={select}
                name="Love Portal"
                select={this.select}
                pic={Rick_and_Morty_Love_Portal_qggvp7}
              />
            </div>
          </div>
        )}

        {cartoon == "park" && (
          <div className="stepGallary">
            <div className="stepGallaryRowCenter">
              <Gallary
                name="Street"
                state={select}
                select={this.select}
                pic="https://res.cloudinary.com/dapozvnbr/image/upload/v1600633983/park/Southpark_Background_Street_r2a0qc.jpg"
              />
              <Gallary
                name="Hill"
                state={select}
                select={this.select}
                pic="https://res.cloudinary.com/dapozvnbr/image/upload/v1600633984/park/SouthPark_Background_Hill_vusueb.jpg"
              />
            </div>
          </div>
        )}

        {cartoon == "familyguy" && (
          <div className="stepGallary">
            <div className="stepGallaryRow">
              <Gallary
                name="Bar"
                state={select}
                select={this.select}
                pic={family_guy_background_Bar_xzg9xh}
              />
              <Gallary
                name="couch"
                state={select}
                select={this.select}
                pic={family_guy_background_couch_v42jeh}
              />
              <Gallary
                state={select}
                name="Drunken Clam"
                select={this.select}
                pic={Family_Guy_Background_Drunken_Clam_xgxxze}
              />
              <Gallary
                name="House2"
                state={select}
                select={this.select}
                pic={Family_Guy_Background_House2}
              />
            </div>
          </div>
        )}

        {cartoon == "futurama" && (
          <div className="stepGallary">
            <div className="stepGallaryRow">
              <Gallary
                name="Cockpit"
                state={select}
                select={this.select}
                pic={Futurama_Background_Cockpit_l9gmhw}
              />
              <Gallary
                name="House"
                state={select}
                select={this.select}
                pic={Futurama_Background_House_ugbqaz}
              />
              <Gallary
                name="Retro"
                state={select}
                select={this.select}
                pic={Futurama_Background_Retro_ssv5ff}
              />
            </div>
          </div>
        )}
        {
          this.state.loading ? (
          <span style={{ margin: "60px 0" }}>Uploading...</span>
        ) : (
        <div className="customizeFileBox">
          <p className="customizeFileTitle1">
            ...or personlize your work up to the last details!
          </p>
          <p className="customizeFileTitle2">Upload background to customize</p>
          <p className="customGrayTxt1">Extra fee applied* 20 USD</p>
          <input type="file" id="uploadImg" onChange={this.handleChange} />
          <label for="uploadImg" className="fileUploadBox">
            <img alt="" src={upload} className="uploadIcon" />
            <p className="uploadTitle">tap to browse on your computer</p>
            <p>Please choose between PNG, JPEG, SVG format.</p>
          </label>
        </div>
        )}
        <div className="previewImgBox">
          <img alt="" src={file} className="previewImgBg" />
          {file && <img alt="" src={tick} className="imgTick" />}
        </div>

        <button
          className={
            select !== "" || file !== null ? "step1ActiveBut" : "step1But"
          }
          onClick={select !== "" || file !== null ? this.next : null}
        >
          NEXT STEP
        </button>
        <Footer History={this.props.history} />
      </div>
    );
  }
}
