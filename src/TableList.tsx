/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import styled from 'styled-components';
import { Body, Cell, Head, HeaderCell, HeaderRow, Row, Table } from '@zendeskgarden/react-tables';
import { Pagination } from '@zendeskgarden/react-pagination';
import { Button } from '@zendeskgarden/react-buttons';
import { Tag } from '@zendeskgarden/react-tags';

const StyledTable = styled(Table)`
  margin-bottom: ${(p) => p.theme.space.md};
  min-width: 500px;
`;

interface IRow {
  fruit: string;
  sun: string;
  soil: string;
  score: number;
  scannedAt: string;
}

const rowData: IRow[] = Array.from(Array(100)).map((row, index) => ({
  fruit: `Account Name #${index}`,
  sun: 'z3n-xxxxxxx',
  soil: ['H: 5', 'M: 4', 'L: 2'],
  score: 45,
  scannedAt: '2023-01-01 00:00:00'
}));

const createRow = (row: IRow, index: number) => (
  <Row key={index}>
    <Cell>{row.fruit}</Cell>
    <Cell>{row.sun}</Cell>
    <Cell>
      {row.soil.map((value) => (
        <>
          {' '}
          <Tag hue={value.includes('H') ? 'red' : value.includes('M') ? 'blue' : 'yellow'}>
            <span>{value}</span>
          </Tag>
        </>
      ))}
    </Cell>
    <Cell>
      <b>{row.score}</b>
    </Cell>
    <Cell>{row.scannedAt}</Cell>
    <Cell>
      <Button size="small">Scan Now</Button>
    </Cell>
  </Row>
);

const TableList = () => {
  const pageSize = 10;
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div style={{ overflowX: 'auto' }}>
      <StyledTable>
        <Head>
          <HeaderRow>
            <HeaderCell>Name</HeaderCell>
            <HeaderCell>Subdomain</HeaderCell>
            <HeaderCell>Criticality</HeaderCell>
            <HeaderCell>Score</HeaderCell>
            <HeaderCell>Date Scanned</HeaderCell>
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
      <nav aria-label="table example pagination">
        <Pagination
          totalPages={rowData.length / pageSize}
          currentPage={currentPage}
          onChange={setCurrentPage}
        />
      </nav>
    </div>
  );
};

export default TableList;
