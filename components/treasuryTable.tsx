'use client';

import React from 'react';
import styled from 'styled-components';

const TableWrapper = styled.div`
  width: 100%;
  border: 1px solid var(--primary-main);
  border-radius: 2px;
  overflow: hidden;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Thead = styled.thead`
  background: var(--primary-main);
`;

const Th = styled.th`
  padding: 10px;
  font-size: 13px;
  font-weight: 700;
  color: #000;
  text-align: left;
`;

const Tr = styled.tr`
  border-top: 1px solid rgba(231, 231, 231, 0.5);
`;

const Td = styled.td`
  padding: 10px;
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
`;

export const TreasuryTable = () => {
  const rows = [
    { tender: '91-Day', discount: '24.50%', interest: '26.10%' },
    { tender: '182-Day', discount: '25.10%', interest: '27.00%' },
    { tender: '364-Day', discount: '25.85%', interest: '27.90%' },
    { tender: '2-Year', discount: '26.40%', interest: '28.60%' },
    { tender: '3-Year', discount: '27.10%', interest: '29.30%' },
    { tender: '5-Year', discount: '28.00%', interest: '30.50%' },
  ];

  return (
    <TableWrapper>
      <Table>
        <Thead>
          <Tr>
            <Th>TENDER</Th>
            <Th>DISCOUNT</Th>
            <Th>INTEREST</Th>
          </Tr>
        </Thead>
        <tbody>
          {rows.map((row) => (
            <Tr key={row.tender}>
              <Td>{row.tender}</Td>
              <Td>{row.discount}</Td>
              <Td>{row.interest}</Td>
            </Tr>
          ))}
        </tbody>
      </Table>
    </TableWrapper>
  );
};