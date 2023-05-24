/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { Button } from '@zendeskgarden/react-buttons';
import { XXL, MD, SM } from '@zendeskgarden/react-typography';
import { PALETTE } from '@zendeskgarden/react-theming';
import { ReactComponent as ProductIcon } from '@zendeskgarden/svg-icons/src/26/garden.svg';
import { ReactComponent as HomeIcon } from '@zendeskgarden/svg-icons/src/26/home-fill.svg';
import { ReactComponent as EmailIcon } from '@zendeskgarden/svg-icons/src/26/email-fill.svg';
import { ReactComponent as SettingsIcon } from '@zendeskgarden/svg-icons/src/26/settings-fill.svg';
import { ReactComponent as ZendeskIcon } from '@zendeskgarden/svg-icons/src/26/zendesk.svg';
import { ReactComponent as MenuTrayIcon } from '@zendeskgarden/svg-icons/src/16/grid-2x2-stroke.svg';
import { ReactComponent as PersonIcon } from '@zendeskgarden/svg-icons/src/16/user-solo-stroke.svg';
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

import RulesList from './RulesList';

const AccountDetails = () => {
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
              <Title>
                <span style={{ fontSize: 20 }}>skynet999</span>
                <span>#6346587</span>
              </Title>
              S 99904 / P 999 / None / Radar Cluster 2 - skynet999 - $999,999 ARR{' '}
              <a href="#id">See in monitor</a>
              <br />
            </Well>
            <br />
            <Grid>
              <Row>
                <Col size={6}>
                  <XXL tag="h1">List of Rules</XXL>
                </Col>
                <Col size={4}>
                  <MD tag="h1">Last Scanned: 01/01/2023</MD>
                </Col>
                <Col size={2}>
                  <Button size="small">Scan Now</Button>
                </Col>
              </Row>
            </Grid>

            <RulesList />
          </Main>
        </Content>
      </Body>
    </Chrome>
  );
};

export default AccountDetails;
