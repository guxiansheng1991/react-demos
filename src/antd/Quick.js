import React, {useState} from 'react';
import {Button, DatePicker, version, ConfigProvider, message, Alert } from 'antd';

// class Quick extends React.Component {
//     constructor(props) {
//         super(props);
//     }

//     render() {
//         const { date, setDate } = useState();
//         const handleChange = value => {
//             message.info(`您选择的日期是: ${value ? value.format('YYYY年MM月DD日') : '未选择'}`);
//             setDate(value);
//         };
//         return (
//             // <div>
//             //     <h3>quick start, react version: {version}</h3>
//             //     <DatePicker />
//             //     <Button type="primary" style={{marginLeft: 8}}>哈哈哈</Button>
//             // </div>
//             <ConfigProvider>
//                 <div style={{ width: 400, margin: '100px auto' }}>
//                     <DatePicker onChange={handleChange} />
//                     <div style={{ marginTop: 16 }}>
//                     当前日期：{date ? date.format('YYYY年MM月DD日') : '未选择'}
//                     </div>
//                 </div>
//             </ConfigProvider>
//         );
//     }
// }

function Quick() {
    const [ date, setDate ] = useState(null);
    const handleChange = value => {
        message.info(`您选择的日期是: ${value ? value.format('YYYY年MM月DD日') : '未选择'}`);
        setDate(value);
    };
    return (
        // <div>
        //     <h3>quick start, react version: {version}</h3>
        //     <DatePicker />
        //     <Button type="primary" style={{marginLeft: 8}}>哈哈哈</Button>
        // </div>
        <ConfigProvider>
            <div style={{ width: 400, margin: '100px auto' }}>
                <DatePicker onChange={handleChange} />
                <div style={{ marginTop: 16 }}>
                <Alert message="当前日期" description={date ? date.format('YYYY年MM月DD日') : '未选择'} />
                </div>
            </div>
        </ConfigProvider>
    );
}

export default Quick;