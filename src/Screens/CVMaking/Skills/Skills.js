import React, { useState } from 'react';
import { Row, Col, Modal, Button, Checkbox } from 'antd'
import { EyeOutlined } from '@ant-design/icons'
import TextArea from './../../../components/Utils/CVMaking Components/TextArea/TextArea';
import DateField from './../../../components/Utils/CVMaking Components/DateField/DateField';
import './../BasicInfo/BasicInfo.css'
import Navbar from './../../../components/Navbar/Navbar';
import seven from './../../ChooseTemplateScreen/images/ten.jpg'
import image from './../BasicInfo/image.png'
import { useMediaQuery } from 'react-responsive'
import Tab from './../../../components/Utils/CVMaking Components/ActivityBar/Tab';
import NameBadge from './../../../components/Utils/CVMaking Components/NameBadges/NameBadge';
import InputField from './../../../components/Utils/CVMaking Components/InputFields/InputField';
import CVMakingButton from './../../../components/Utils/CVMaking Components/Buttons/CVMakingButton';
import Footer from './../../../components/Footer/Footer';
import AddMore from './AddMore';
import ImageModal from './../../../components/ImageModal/ImageModal';
const Education = () => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isMobile = useMediaQuery({ maxWidth: 600 })
    const [degreeProgram, setDegreeProgram] = useState([{ degreeProgram: "" }]);
    const [softwareSkills, setSoftwareSkills] = useState([{ softwareSkills: "" }]);

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };
    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <Navbar border={true} />
            {/* Tabs */}
            {isMobile ? <></> : <div style={{ margin: "7% 0%", display: "flex", justifyContent: "center" }}>
                <Tab current={3}></Tab>
            </div>
            }

            {/* Heading and UploadButton */}
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div className="basicInfoDislay">
                    <Row >
                        <Col lg={18} md={18} sm={24} xs={24}>
                            <h1 className="basicInfoPageHeading">Tell us about your Skills</h1>
                            <h6 className="fieldsMessage">Fields with <span style={{ color: "red" }}>*</span> are mandatory</h6>

                        </Col>
                        <Col className="uploadPhoto" lg={6} md={6} sm={24} xs={24}>
                            <div>
                                <img width={60} src={image}></img></div>
                            <p className="uploadPhotoText">Upload your Photo</p>
                        </Col>
                    </Row>
                </div>

            </div>

            {/* Input Fields */}
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div className="basicInfoDislay" >
                    <Row justify={isTabletOrMobile ? "center" : "start"}>
                        <Col lg={16} md={16} sm={24} xs={24}>

                            <Row style={{ marginTop: "7%" }}>
                                <Col span={isMobile ? 22 : 11}>
                                    <NameBadge name="Add Professional Skills"></NameBadge>
                                    <Row style={{ marginBottom: "10%" }}>
                                        {degreeProgram.map((d, i) => {
                                            return <><Col style={{ marginTop: "5%" }} span={22}><InputField
                                                placeholder="Degree Program"
                                                suffix={true}
                                                type="text"
                                            />

                                            </Col>
                                                <Col offset={1} style={{ marginTop: "7%" }} span={1}>
                                                    <span onClick={() => {
                                                        const list = [...degreeProgram];
                                                        list.splice(i, 1);
                                                        setDegreeProgram(list);
                                                    }} span={1} style={{ cursor: "pointer" }}><i class="far fa-trash-alt"></i></span>

                                                </Col>
                                            </>
                                        })}

                                        <AddMore onClick={() => setDegreeProgram([...degreeProgram, { name: "hello" }])} />
                                    </Row>
                                    <Row>
                                        <Col span={11}>
                                            <NameBadge name="Interest"></NameBadge>

                                        </Col>
                                        <Col span={11}>
                                            <div style={{ display: "flex", justifyContent: "flex-end" }}>
                                                <Button style={{
                                                    backgroundColor: "#F4F4F4",
                                                    textAlign: "center", color: "#0A2C66",
                                                    border: "none",
                                                    padding: "0px 15px"
                                                }}
                                                    shape="round"
                                                    onClick={showModal}
                                                    icon={<EyeOutlined style={{ all: "unset", color: "#FF4309" }} />} size={1}>
                                                    View
                                                </Button>
                                            </div>
                                            <Modal
                                                title={
                                                    <div style={{ color: "#0a2c66", fontSize: "20px" }}>
                                                        <strong>Select Hobby</strong>
                                                    </div>
                                                }
                                                visible={isModalVisible}
                                                onOk={handleOk}
                                                onCancel={handleCancel}
                                                width={650}
                                                footer={null}
                                            ><ImageModal /></Modal>
                                        </Col>
                                        <Col span={2}></Col>
                                    </Row>
                                    <Row style={{ marginBottom: "10%" }}>
                                        {degreeProgram.map((d, i) => {
                                            return <><Col style={{ marginTop: "5%" }} span={22}><InputField
                                                placeholder="Degree Program"
                                                suffix={true}
                                                type="text"
                                            />

                                            </Col>
                                                <Col offset={1} style={{ marginTop: "7%" }} span={1}>
                                                    <span onClick={() => {
                                                        const list = [...degreeProgram];
                                                        list.splice(i, 1);
                                                        setDegreeProgram(list);
                                                    }} span={1} style={{ cursor: "pointer" }}><i class="far fa-trash-alt"></i></span>

                                                </Col>
                                            </>
                                        })}

                                        <AddMore onClick={() => setDegreeProgram([...degreeProgram, { name: "hello" }])} />
                                    </Row>
                                    <NameBadge name="Language"></NameBadge>
                                    <Row >
                                        {degreeProgram.map((d, i) => {
                                            return <><Col style={{ marginTop: "5%" }} span={22}><InputField
                                                placeholder="Degree Program"
                                                suffix={true}
                                                type="text"
                                            />

                                            </Col>
                                                <Col offset={1} style={{ marginTop: "7%" }} span={1}>
                                                    <span onClick={() => {
                                                        const list = [...degreeProgram];
                                                        list.splice(i, 1);
                                                        setDegreeProgram(list);
                                                    }} span={1} style={{ cursor: "pointer" }}><i class="far fa-trash-alt"></i></span>

                                                </Col>
                                            </>
                                        })}

                                        <AddMore onClick={() => setDegreeProgram([...degreeProgram, { name: "hello" }])} />
                                    </Row>

                                </Col>
                                <Col span={2}></Col>
                                <Col span={isMobile ? 22 : 11}>
                                    <NameBadge name="Add Software Skills"></NameBadge>
                                    <Row >
                                        {softwareSkills.map((d, i) => {
                                            return <><Col style={{ marginTop: "5%" }} span={22}><InputField
                                                placeholder="Degree Program"
                                                suffix={true}
                                                type="text"
                                            />

                                            </Col>
                                                <Col offset={1} style={{ marginTop: "7%" }} span={1}>
                                                    <span onClick={() => {
                                                        const list = [...softwareSkills];
                                                        list.splice(i, 1);
                                                        setSoftwareSkills(list);
                                                    }} span={1} style={{ cursor: "pointer" }}><i class="far fa-trash-alt"></i></span>

                                                </Col>
                                            </>
                                        })}

                                        <AddMore onClick={() => setSoftwareSkills([...softwareSkills, { name: "hello" }])} />
                                    </Row>

                                </Col>


                            </Row>

                        </Col>













                        <Col span={2} />
                        <Col style={{ textAlign: "center" }} lg={6} md={6} sm={14} xs={14}>
                            <img className="basicInfoCVImage" style={{ maxWidth: "70%" }} src={seven} alt="CV is Loading"></img>
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <Button style={{
                                    backgroundColor: "#F4F4F4",
                                    textAlign: "center",
                                    marginTop: "30px", color: "#0A2C66",
                                    border: "none"
                                }} shape="round" icon={<EyeOutlined style={{ all: "unset", color: "#FF4309" }} />} size={5}>
                                    Preview
        </Button>
                            </div>
                        </Col>
                    </Row>

                    {/* Back and Next Buttons */}
                    <div style={{ display: "flex", justifyContent: "space-between", marginTop: "7%", marginBottom: "125px" }}>
                        <div>
                            <CVMakingButton name="Back" />
                        </div>
                        <div>
                            <CVMakingButton name="Next" />

                        </div>

                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer bgColor="#FAFBFC" border={true} />
        </>
    );
}

export default Education;