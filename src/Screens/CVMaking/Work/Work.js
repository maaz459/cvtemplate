import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Button, Checkbox } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import "./../BasicInfo/BasicInfo.css";
import Navbar from "./../../../components/Navbar/Navbar";
import seven from "./../../ChooseTemplateScreen/images/ten.jpg";
import image from "./../BasicInfo/image.png";
import { useMediaQuery } from "react-responsive";
import Tab from "./../../../components/Utils/CVMaking Components/ActivityBar/Tab";
import NameBadge from "./../../../components/Utils/CVMaking Components/NameBadges/NameBadge";
import InputField from "./../../../components/Utils/CVMaking Components/InputFields/InputField";
import CVMakingButton from "./../../../components/Utils/CVMaking Components/Buttons/CVMakingButton";
import Footer from "./../../../components/Footer/Footer";
import WorkFields from "./WorkFields";
import DateField from "../../../components/Utils/CVMaking Components/DateField/DateField";
import TextArea from "../../../components/Utils/CVMaking Components/TextArea/TextArea";
import { getWorkExperienceInfo } from "./../../../actions/resumeDetailsActions";
import ViewCVButton from "../../../components/Utils/CVMaking Components/viewCVButton/viewCVButton";
const Work = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isMobile = useMediaQuery({ maxWidth: 600 });
  const [inputIndex, setInputIndex] = useState(0);
  const workExperience = useSelector((state) => state.resumeDetails.workExperience);
  let dispatch = useDispatch();
  useEffect(() => {
    setWorkExperienceList(workExperience);
  }, []);
  const [workExperienceList, setWorkExperienceList] = useState([]);
  const updateWork = (index, name, value) => {
    let updatedList = [...workExperienceList];
    updatedList[index][name] = value;
    setWorkExperienceList(updatedList);
  };
  const deleteWorkExperience = (index) => {
    let updatedList = [...workExperienceList];
    let removedItem = updatedList.splice(index, 1);
    updatedList.filter((x) => x !== removedItem[0]);
    setWorkExperienceList(updatedList);
    setInputIndex(inputIndex - 1);
  };
  const [workExperienceInfo, setWorkExperienceInfo] = useState({
    workExperienceList,
  });

  // Use Effect for Work Experience

  useEffect(() => {
    setWorkExperienceInfo({
      workExperienceList,
    });
  }, [workExperienceList]);
  useEffect(() => {
    dispatch(getWorkExperienceInfo(workExperienceInfo));
  }, [dispatch, workExperienceInfo]);

  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }

  return (
    <>
      <Navbar border={true} />
      {/* Tabs */}
      {isMobile ? (
        <></>
      ) : (
        <div style={{ margin: "7% 0%", display: "flex", justifyContent: "center" }}>
          <Tab current={1}></Tab>
        </div>
      )}

      {/* Heading and UploadButton */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="basicInfoDislay">
          <Row>
            <Col lg={18} md={18} sm={24} xs={24}>
              <h1 className="basicInfoPageHeading">Tell us about your job experience</h1>
              <h6 className="fieldsMessage">
                Fields with <span style={{ color: "red" }}>*</span> are mandatory
              </h6>
            </Col>
            <Col className="uploadPhoto" lg={6} md={6} sm={24} xs={24}>
              <div>
                <img width={60} src={image}></img>
              </div>
              <p className="uploadPhotoText">Upload your Photo</p>
            </Col>
          </Row>
        </div>
      </div>

      {/* Input Fields */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="basicInfoDislay">
          <Row justify={isTabletOrMobile ? "center" : "start"}>
            <Col lg={16} md={16} sm={24} xs={24}>
              {/* <WorkFields onClick={() => settingList(i)} /> */}
              {workExperienceList.map((d, i) => {
                return (
                  <>
                    {i == 0 && <NameBadge name="Most Recent Jobs"></NameBadge>}
                    {i != 0 && <NameBadge margin="true" name="Previous Jobs" additional="If Any"></NameBadge>}

                    <Row justify="center" style={{ marginTop: "5%" }}>
                      <Col span={11}>
                        <InputField
                          placeholder="Job TItle"
                          suffix={true}
                          type="text"
                          value={d.title}
                          onChange={(e) => updateWork(i, "title", e.target.value)}
                        />
                      </Col>

                      <Col span={2}></Col>
                      <Col span={11}>
                        <InputField
                          placeholder="Employer"
                          suffix={true}
                          type="text"
                          value={d.employer}
                          onChange={(e) => updateWork(i, "employer", e.target.value)}
                        />
                      </Col>

                      <Col style={{ marginTop: "7%" }} span={11}>
                        <InputField
                          placeholder="City"
                          type="text"
                          value={d.city}
                          onChange={(e) => updateWork(i, "city", e.target.value)}
                        />
                      </Col>
                      <Col span={2}></Col>
                      <Col style={{ marginTop: "7%" }} span={11}>
                        <InputField
                          placeholder="State/Province"
                          type="text"
                          value={d.state}
                          onChange={(e) => updateWork(i, "state", e.target.value)}
                        />
                      </Col>

                      <Col style={{ marginTop: "7%", marginBottom: "7%" }} span={11}>
                        <DateField
                          placeholder="Start Date"
                          value={d.startDate}
                          onChange={(date, dateString) => updateWork(i, "startDate", dateString)}
                        />
                      </Col>
                      <Col style={{ marginTop: "7%", marginBottom: "7%" }} span={2}></Col>
                      <Col style={{ marginTop: "7%", marginBottom: "7%" }} span={11}>
                        <DateField
                          placeholder="End Date"
                          value={d.endDate}
                          onChange={(date, dateString) => updateWork(i, "endDate", dateString)}
                        />
                      </Col>

                      {i == 0 && (
                        <Col
                          offset={isTabletOrMobile ? (isMobile ? 12 : 15) : 17}
                          span={isTabletOrMobile ? (isMobile ? 12 : 9) : 6}
                        >
                          <Checkbox style={{ color: "red" }} onChange={onChange}>
                            I currently work here
                          </Checkbox>
                        </Col>
                      )}
                    </Row>

                    <Row>
                      <Col style={{ marginTop: "5%" }} span={24}>
                        <TextArea
                          onChange={(e) => updateWork(i, "description", e.target.value)}
                          placeholder="Add Description"
                          suffix
                          textArea={true}
                          minRows={3}
                        ></TextArea>
                      </Col>
                      {i != 0 && (
                        <Col
                          offset={23}
                          span={1}
                          onClick={() => deleteWorkExperience(i)}
                          style={{
                            cursor: "pointer",
                            zIndex: "1000",
                            position: "relative",
                            right: isMobile ? "-15px" : "-50px",
                            top: "-50px",
                          }}
                          span={1}
                        >
                          <i class="far fa-trash-alt"></i>
                        </Col>
                      )}
                    </Row>
                  </>
                );
              })}
              {inputIndex < 2 && (
                <Row>
                  <Col style={{ marginTop: "5%" }} span={22}>
                    <p
                      onClick={() => {
                        setInputIndex(inputIndex + 1);
                        setWorkExperienceList([
                          ...workExperienceList,
                          { title: "", employer: "", city: "", state: "", description: "", startDate: "", endDate: "" },
                        ]);
                      }}
                      style={{ fontFamily: "AvenirTextBlack", color: "#FF4309", cursor: "pointer" }}
                    >
                      Add More <i style={{ color: "#0A2C66" }} class="fas fa-plus"></i>
                    </p>
                  </Col>
                </Row>
              )}
            </Col>
            <Col span={2} />
            <Col style={{ textAlign: "center" }} lg={6} md={6} sm={14} xs={14}>
              <img className="basicInfoCVImage" style={{ maxWidth: "70%" }} src={seven} alt="CV is Loading"></img>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <ViewCVButton />
              </div>
            </Col>
          </Row>

          {/* Back and Next Buttons */}
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: "7%", marginBottom: "125px" }}>
            <div>
              <CVMakingButton to="basicInfo" name="Back" />
            </div>
            <div>
              <CVMakingButton to="education" name="Next" />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer bgColor="#FAFBFC" border={true} />
    </>
  );
};

export default Work;
