import "./style.css";
import React, { Component } from "react";
import plus from "../../../Assets/plus.png";
import Steps from "../../../Components/Steps";
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";
import upload from "../../../Assets/uploadIcon.png";
import Previous from "../../../Components/Previous";
import Circle from "../../../Assets/stepHalfCircle.png";
import rigthCircle from "../../../Assets/rigthStepCircle.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import firebase from "../../../helper";
import { v4 } from "uuid";

export default class Step1 extends Component {
  state = {
    loading: false,
    text: "",
    file: [],
  };

  handleChange = async (event) => {
    try {
      this.setState({ loading: true });
      let file = event.target.files[0];
      let ref = await firebase
        .storage()
        .ref(`/person/${file.name.split(" ")[0]}`);
      await ref.put(file);
      let url = await ref.getDownloadURL();
      var img = this.state.file.concat(url);
      this.setState({ file: img, loading: false });
      localStorage.setItem("cartoonized", JSON.stringify(img));
    } catch (e) {
      this.setState({ loading: false });
      alert("Error Loading the image");
    }
  };

  remove = (i) => {
    var array = [...this.state.file];
    array.splice(i, 1);
    this.setState({ file: array });
    localStorage.setItem("cartoonized", JSON.stringify(array));
  };

  notes = () => localStorage.setItem("notes", this.state.text);
  componentDidMount = () => {

    firebase.analytics().logEvent('visit_order_step_5',{}) 
  }

  render() {
    const { file } = this.state;
    const { history } = this.props;
    return (
      <div className="stepBox1">
        <Header History={history} />
        <Steps />
        <Previous path="/orderstep4" />
        <img alt="" src={Circle} className="stepsBigCircle" />
        <img alt="" src={rigthCircle} className="rigthStepCircle" />
        <img alt="" src={plus} className="step4plus1" />
        <img alt="" src={plus} className="step4plus2" />
        <img alt="" src={plus} className="step4plus3" />
        <div className="stepTopData5">
          <h1 className="stepDataHead">Step 5</h1>
          <h4 className="stepSubHead5">
            Let’s choose what image
            <br />
            you’d like to convert!
          </h4>
          <p className="stepSubHeadsmall">
            Please drag and drop or upload the photo you want to get
            cartoonized!
          </p>
        </div>
        {this.state.loading ? (
          <span style={{ marginTop: 60 }}>Uploading...</span>
        ) : (
          <div className="cartoonFileBox">
            <input type="file" id="uploadImg" onChange={this.handleChange} />
            <label for="uploadImg" className="fileUploadBox">
              <img alt="" src={upload} className="uploadIcon" />
              <p className="uploadTitle">tap to browse on your computer</p>
              <p className="uploadTitleDisc">
                Please choose between PNG, JPEG, SVG format.
              </p>
            </label>
          </div>
        )}
        <div className="previewImgBox">
          {!!file.length &&
            file.map((e, i) => {
              return (
                <div className="crossbx">
                  <FontAwesomeIcon
                    icon={faTimesCircle}
                    className="crossred"
                    onClick={() => this.remove(i)}
                  />
                  <img alt="" src={e} className="previewImg1own" />
                </div>
              );
            })}
        </div>

        <div className="notesBox">
          <p className="noteTitle1">Got any special wish? Leave us a note!</p>
          <p className="noteTitle2">
            Let out artists really understand every wish you have!
          </p>
          <textarea
            className="notesInput"
            placeholder="Can you please add..."
            onChange={(e) => this.setState({ text: e.target.value })}
          />
        </div>

        <button
          className={file.length ? "step1ActiveBut" : "step1But"}
          onClick={file.length ? () => history.push("/orderstep6") : null}
        >
          NEXT STEP
        </button>
        <Footer History={history} />
      </div>
    );
  }
}
