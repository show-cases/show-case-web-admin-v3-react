import React from 'react';
import { Layout, Typography } from 'antd';


export const Footer : React.FC = () => {
    return (
      <Layout.Footer>
        <Typography.Title level={3} style={{'textAlign': 'center'}}>
        Copyright &#169; woaihuiben.com. All rights reserved.  <br />&#128231; bruce.jia@live.com 
        </Typography.Title>
      </Layout.Footer>)
}
