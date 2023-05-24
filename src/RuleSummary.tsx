/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { Button } from '@zendeskgarden/react-buttons';
import { XXL, MD } from '@zendeskgarden/react-typography';
import { PALETTE } from '@zendeskgarden/react-theming';
import { ReactComponent as ProductIcon } from '@zendeskgarden/svg-icons/src/26/garden.svg';
import { ReactComponent as HomeIcon } from '@zendeskgarden/svg-icons/src/26/home-fill.svg';
import { ReactComponent as EmailIcon } from '@zendeskgarden/svg-icons/src/26/email-fill.svg';
import { ReactComponent as SettingsIcon } from '@zendeskgarden/svg-icons/src/26/settings-fill.svg';
import { ReactComponent as ZendeskIcon } from '@zendeskgarden/svg-icons/src/26/zendesk.svg';
import { ReactComponent as MenuTrayIcon } from '@zendeskgarden/svg-icons/src/16/grid-2x2-stroke.svg';
import { ReactComponent as FilterIcon } from '@zendeskgarden/svg-icons/src/16/filter-fill.svg';
import { Field, Label, MediaInput } from '@zendeskgarden/react-forms';
import { ReactComponent as StartIcon } from '@zendeskgarden/svg-icons/src/16/search-stroke.svg';
import { ReactComponent as EndIcon } from '@zendeskgarden/svg-icons/src/16/leaf-stroke.svg';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';

import {
  Chrome,
  Body,
  Content,
  Main,
  Header,
  HeaderItem,
  HeaderItemIcon,
  HeaderItemText,
  Footer,
  FooterItem,
  Nav,
  NavItem,
  NavItemIcon,
  NavItemText,
  Sidebar,
  SkipNav
} from '@zendeskgarden/react-chrome';
import { Well, Title } from '@zendeskgarden/react-notifications';

import TableList from './TableList';

const RuleSummary = () => {
  const [nav, setNav] = useState('nav-1');

  return (
    <Chrome isFluid style={{ height: '100%' }}>
      <Body>
        <Header>
          <HeaderItem>Overview</HeaderItem>
          <HeaderItem>Rules</HeaderItem>
          <HeaderItem>Analytics</HeaderItem>
          <HeaderItem>
            <MediaInput
              start={<StartIcon />}
              end={<EndIcon />}
              placeholder="Account ID or subdomain"
            />
          </HeaderItem>
        </Header>
        <Content id="example-main-content">
          <Main style={{ padding: 28 }}>
            <Well>
              <span style={{ display: 'block', fontSize: 22, fontStyle: 'bold' }}>
                Number of Accounts Impacted
              </span>
              <img style={{ display: 'inline-block', width: 230 }} src="/Rules.png" />
              <img style={{ display: 'inline-block', width: 245 }} src="/SPP.png" />
              <img style={{ display: 'inline-block', width: 200 }} src="/Subscribed_vs_Trial.png" />
            </Well>
            <br />
            <Grid>
              <Row>
                <Col size={9}>
                  <XXL tag="h1">List of Accounts with Health Issues</XXL>
                </Col>
                <Col size={3} style={{ textAlign: 'right' }}>
                  <Button size="small">
                    <FilterIcon />
                    &nbsp; Filter
                  </Button>
                </Col>
              </Row>
            </Grid>

            <TableList />
          </Main>
        </Content>
      </Body>
    </Chrome>
  );
};

export default RuleSummary;
