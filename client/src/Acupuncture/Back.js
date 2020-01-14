import React from 'react';
// import api from "../api";

class Back extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         images: [],
    //         disease: {
    //             disease_id: "",
    //             disease_name: "",
    //             disease_created_at: "",
    //         },
    //     }
    // }

    // componentDidMount () {
    //     this.getDisease(this.props.location.state.disease_id);
    //     // this.getImages(this.props.location.state.disease_id);
    // }

    // async getDisease(id){
    //     await api.get('/diseases/' + id, {})
    //     .then((response) => {
    //         this.setState({disease:response.data});
    //         console.log(this.state.disease);
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     })
    // }

    // getImages(disease_id) {
    //     api.get('/images', {
    //         params: {
    //             disease_id: disease_id
    //         }
    //     })
    //     .then((response) => {
    //         this.setState({images:response.data});
    //         console.log(this.state.images);
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     })
    // }

    // renderTableData(){
    //     return this.state.images.map((image, index) => {
    //         return (
    //             <div className="text-center mt-5" style={{width: '100%'}} key={image.image_id}>
    //                 <img alt="Acupuncture" src={image.image_path} useMap="#acupuncturemap"/>
    //                 <map name="acupuncturemap">
    //                   <area shape="circle" coords="302,90,60" alt="Head" href="/profile"/>
    //                   <area shape="rect" coords="0,150,604,450" alt="Back" href="/diseases"/>
    //                   <area shape="rect" coords="0,460,604,820" alt="Leg" href="venus.htm"/>
    //                 </map>
    //             </div>
    //         )
    //     })
    // }

    render () {
        return (
            <div style={{float:'none'}} className="container">
                <h1 style={{padding: '100px 0 30px'}} className="text-center">ĐỢT MỘT, NGÀY CHÂM THỨ NHẤT</h1>
                <div className="text-center mt-5" style={{width: '100%'}}>
                    <h3>1. Huyệt (lm1.1));((lm1'.1)):</h3>
                    <img alt="Acupuncture" src="/image/acupuncture/Dot1-Ngay1-4.png" useMap="#acupuncturemap"/>
                    <div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>
                <div className="text-center mt-5" style={{width: '100%'}}>
                    <h3>2. Huyệt (lm2.1));((lm2'.1)):</h3>
                    <img alt="Acupuncture" src="/image/acupuncture/Dot1-Ngay1-4.png" useMap="#acupuncturemap"/>
                    <div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>
                <div className="text-center mt-5" style={{width: '100%'}}>
                    <h3>3. Huyệt (lm16.1));((lm16'.1)):</h3>
                    <img alt="Acupuncture" src="/image/acupuncture/Dot1-Ngay1-4.png" useMap="#acupuncturemap"/>
                    <div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>
                <div className="text-center mt-5" style={{width: '100%'}}>
                    <h3>4. Huyệt (lm17.1));((lm17'.1)):</h3>
                    <img alt="Acupuncture" src="/image/acupuncture/Dot1-Ngay1-7.png" useMap="#acupuncturemap"/>
                    <div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>
                <div className="text-center mt-5" style={{width: '100%'}}>
                    <h3>5. Huyệt (lm29.1));((lm29'.1)):</h3>
                    <img alt="Acupuncture" src="/image/acupuncture/Dot1-Ngay1-8.png" useMap="#acupuncturemap"/>
                    <div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>
                <div className="text-center mt-5" style={{width: '100%'}}>
                    <h3>6. Huyệt (tn3.0));((tn3'.0)):</h3>
                    <img alt="Acupuncture" src="/image/acupuncture/Dot1-Ngay1-9.png" useMap="#acupuncturemap"/>
                    <div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>
                <div className="text-center mt-5" style={{width: '100%'}}>
                    <h3>7. Huyệt (tn5.0));((tn5'.0)):</h3>
                    <img alt="Acupuncture" src="/image/acupuncture/Dot1-Ngay1-12.png" useMap="#acupuncturemap"/>
                    <div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Back;
