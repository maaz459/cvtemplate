import React,{useState} from 'react'
import {Button,Modal} from 'antd'
import {useSelector} from 'react-redux'
import { EyeOutlined } from '@ant-design/icons'
import ResumeFive from '../../../ResumeComponent/ResumeFive/ResumeFive';
import ResumeTwelve from '../../../ResumeComponent/ResumeTwelve/ResumeTwelve';
import ResumeOne from '../../../ResumeComponent/ResumeOne/ResumeOne';
import './modal.css'
import './../../../../Screens/MainScreen/styles.css'
import MainScreen from './../../../../Screens/MainScreen/MainScreen'
import ResumeThree from '../../../ResumeComponent/ResumeThree/ResumeThree';
import useWindowDimensions from './../../../windowDimensions'
import ResumeTwo from '../../../ResumeComponent/ResumeTwo/ResumeTwo';
import ResumeFour from '../../../ResumeComponent/ResumeFour/ResumeFour';
import ResumeSix from '../../../ResumeComponent/ResumeSix/ResumeSix';
import ResumeSeven from '../../../ResumeComponent/ResumeSeven/ResumeSeven';
import ResumeEight from '../../../ResumeComponent/ResumeEight/ResumeEight';
import ResumeNine from '../../../ResumeComponent/ResumeNine/ResumeNine';
import ResumeTen from '../../../ResumeComponent/ResumeTen/ResumeTen';
import ResumeEleven from '../../../ResumeComponent/ResumeEleven/ResumeEleven';
import ResumeThirteen from '../../../ResumeComponent/ResumeThirteen/ResumeThirteen';
import ResumeFourteen from '../../../ResumeComponent/ResumeFourteen/ResumeFourteen';
import ResumeFifteen from '../../../ResumeComponent/ResumeFifteen/ResumeFifteen';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';
const ViewCVButton=()=>{
    const [isModalVisible, setIsModalVisible] = useState(false);
    const { width } = useWindowDimensions();
    const [modalStatus, setModalStatus] = useState(false);
    const scaleValue = 0.44;
    const wheel = { disabled: true };
    const pinch = { disabled: false, step:10 };
    const pan = { disabled: false, step:10 };
    const doubleClick = { disabled: true, step:10 };
    const zoomIn = { step: 5};
    const zoomOut = { step: 5};
    const options = { minScale: scaleValue, maxScale: 1.42 };
    const choosenResume = useSelector(state => state.choosenResume.choosenResume);
    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleOk = () => {
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };

    return(<>
        <Modal title="Basic Modal" 
        visible={isModalVisible} 
        onOk={handleOk} 
        onCancel={handleCancel}
        width={1000}
        >
       {choosenResume === "ResumeOne" ?<ResumeOne />
                             : choosenResume === "ResumeTwo" ?<ResumeTwo />
                           : choosenResume === "ResumeThree" ?<ResumeThree />
                             : choosenResume === "ResumeFour" ?<ResumeFour />
                            : choosenResume === "ResumeFive" ?<ResumeFive />
                             : choosenResume === "ResumeSix" ?<ResumeSix />
                             : choosenResume === "ResumeSeven" ?<ResumeSeven />
                             : choosenResume === "ResumeEight" ?<ResumeEight />
                             : choosenResume === "ResumeNine" ?<ResumeNine />
                         : choosenResume === "ResumeTen" ?<ResumeTen />
                         : choosenResume === "ResumeEleven" ?<ResumeEleven />
                            : choosenResume === "ResumeTwelve" ?<ResumeTwelve />
                             : choosenResume === "ResumeThirteen" ?<ResumeThirteen />
                             : choosenResume === "ResumeFourteen" ?<ResumeFourteen />
                             : choosenResume === "ResumeFifteen" ?<ResumeFifteen />
                            :<></> }
      </Modal>


{/* <div id="myModal" className={`modal ${modalStatus ? "d-block" : "d-none"}`}>

                <div className={`modal-content ${width<=320?'point-three':width>320 && width<=375?'point-four':width>375 && width<=420?'point-five':''}`}>
                    <div className="modal-header">
                        {width <= 820 ?<>
                        <div className="back"><i onClick={()=>setModalStatus(false)} class="fa fa-arrow-left" aria-hidden="true"></i></div>
                        <div style={{color:"white"}} className="text"><h2>Your Resume</h2></div>
                            <div><p>a</p></div></> :<>
                            <span onClick={()=>setModalStatus(false)} className="close">&times;</span>
                            <h2 style={{color:"white"}}>Your Resume</h2></>
                        }
                    </div>
                    <div className="modal-body">
                        <div className={`${width <= 420 ? 'point-three' : ''}`}>
                            {choosenResume === "ResumeOne" ?<ResumeOne />
                             : choosenResume === "ResumeTwo" ?<ResumeTwo />
                           : choosenResume === "ResumeThree" ?<ResumeThree />
                             : choosenResume === "ResumeFour" ?<ResumeFour />
                            : choosenResume === "ResumeFive" ?<ResumeFive />
                             : choosenResume === "ResumeSix" ?<ResumeSix />
                             : choosenResume === "ResumeSeven" ?<ResumeSeven />
                             : choosenResume === "ResumeEight" ?<ResumeEight />
                             : choosenResume === "ResumeNine" ?<ResumeNine />
                         : choosenResume === "ResumeTen" ?<ResumeTen />
                         : choosenResume === "ResumeEleven" ?<ResumeEleven />
                            : choosenResume === "ResumeTwelve" ?<ResumeTwelve />
                             : choosenResume === "ResumeThirteen" ?<ResumeThirteen />
                             : choosenResume === "ResumeFourteen" ?<ResumeFourteen />
                             : choosenResume === "ResumeFifteen" ?<ResumeFifteen />
                            :<></> }
                        </div>
                    </div>
                </div>
                {width<=820?
                <div className='mobile-tools'>
                        <button onClick={() => setModalStatus(false)}>Close Preview</button>
                    </div>
                :<></>}
            </div> */}



    <Button
    
    style={{
        backgroundColor: "#F4F4F4",
        textAlign: "center",
        marginTop: "30px", color: "#0A2C66",
        border: "none"
    
    }}
    onClick={showModal}
    shape="round" icon={<EyeOutlined style={{ all: "unset", color: "#FF4309" }} />} size={5}>
        Preview
</Button>


</>
)

}

export default ViewCVButton;