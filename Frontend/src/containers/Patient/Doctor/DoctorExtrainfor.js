import React, { Component } from 'react';
import { connect } from "react-redux";
import './DoctorExtrainfor.scss';
import moment from 'moment';
import localization from 'moment/locale/vi';
import { LANGUAGES } from '../../../utils';
import { getScheduleDoctorByDate } from '../../../services/userService';
import { FormattedMessage } from 'react-intl';

class DoctorExtrainfor extends Component {

    constructor(props) {
        super(props);
        this.state = {
           isShowDetailInfor: false
        }
    }
    async componentDidMount() {
       
        }
      
  async  componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language !== prevProps.language) {   
        }
    }

    showHideDetailInfor = (status) => {
        this.setState({
            isShowDetailInfor : status
        })
    }

    render() {
        let {isShowDetailInfor} =this.state;
        
        return (

            <div className='doctor-extra-infor-container'>

                <div className="content-up">
                    <div className="text-address"> DIA CHI KHAM</div>
                    <div className="name-clinic"> Phong kham da lieu</div>
                    <div className="detail-address"> 207 pho Hue</div>

                </div>
                <div className="content-down">
                    {isShowDetailInfor === false &&
                     <div className="short-infor">
                        GIA KHAM
                         <span onClick={() => this.showHideDetailInfor(true)}> xem chi tieest</span>
                          </div>
                    }

                    {isShowDetailInfor === true && 
                    <>
                    
                    <div className="title-price"> GIA KHAM: 250.000d</div>
                    <div className="detail-infor">
                    
                        <div className="price">
                           <spam className="left">Gia kham</spam> 
                           <spam className="right">250.000d</spam> 
                        </div>
                         <div className="note"> duoc uu tien kham trc
                         </div>
                    </div>

                    
                    <div className="payment">
                         nguoi dung co the thanh toan
                         </div>
                    <div className="hide-price">
                         <span onClick={() => this.showHideDetailInfor(false)}> an bang gia</span>
                    </div>
                    
                    
                    </>


                    }
                    

                </div>
                
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DoctorExtrainfor);