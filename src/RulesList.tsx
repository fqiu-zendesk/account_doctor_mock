/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import styled from 'styled-components';
import { SM } from '@zendeskgarden/react-typography';
import { Body, Cell, Head, HeaderCell, HeaderRow, Row, Table } from '@zendeskgarden/react-tables';
import { Pagination } from '@zendeskgarden/react-pagination';
import { Button } from '@zendeskgarden/react-buttons';
import { Tag } from '@zendeskgarden/react-tags';
import { ReactComponent as CheckCircleFillIcon } from '@zendeskgarden/svg-icons/src/16/check-circle-fill.svg';
import { ReactComponent as XCircleFillIcon } from '@zendeskgarden/svg-icons/src/16/x-circle-fill.svg';
import { ReactComponent as ChevronDownFillIcon } from '@zendeskgarden/svg-icons/src/16/chevron-down-fill.svg';
import { ReactComponent as ChevronUpFillIcon } from '@zendeskgarden/svg-icons/src/16/chevron-up-fill.svg';

import { Col } from '@zendeskgarden/react-grid';

const StyledTable = styled(Table)`
  margin-bottom: ${(p) => p.theme.space.md};
  min-width: 500px;
`;

interface IRow {
  name: string;
  description: string;
  passed: boolean;
  details: string;
}

const rowData: IRow[] = [
  {
    name: `Rule 1`,
    description: 'Invalid Object',
    passed: true,
    details: null
  },
  {
    name: `Rule 2`,
    description: 'Account exists in multiple universes',
    passed: false,
    details: null
  },
  {
    name: `Rule 3`,
    description: 'Missing SPP flag',
    details:
      'Causes: Rip in the space time continuum. Resolution steps: Pinch your nose and spin around 6.28 radians.',
    passed: false
  }
];

const StyledCol = styled(Col)`
  text-align: center;
  color: ${(p) => 'green'};
`;

const createRow = (row: IRow, index: number) => (
  <Row key={index}>
    <Cell>{row.name}</Cell>
    <Cell>
      {row.description}

      {row.details && <SM style={{ marginTop: '10px' }}>{row.details}</SM>}
    </Cell>
    <Cell>
      <StyledCol lg md={5}>
        {row.passed ? <CheckCircleFillIcon /> : <XCircleFillIcon style={{ color: 'red' }} />}
      </StyledCol>
    </Cell>
    <Cell>{row.details ? <ChevronUpFillIcon /> : <ChevronDownFillIcon />}</Cell>
  </Row>
);

const RulesList = () => {
  const pageSize = 10;
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div style={{ overflowX: 'auto' }}>
      <StyledTable>
        <Head>
          <HeaderRow>
            <HeaderCell>Rule Name</HeaderCell>
            <HeaderCell>Description</HeaderCell>
            <HeaderCell>Passed</HeaderCell>
            <HeaderCell></HeaderCell>
          </HeaderRow>
        </Head>
        <Body>
          {currentPage === 1
            ? rowData.slice(currentPage - 1, pageSize).map(createRow)
            : rowData
                .slice(currentPage * pageSize - pageSize, currentPage * pageSize)
                .map(createRow)}
        </Body>
      </StyledTable>
    </div>
  );
};

export default RulesList;
