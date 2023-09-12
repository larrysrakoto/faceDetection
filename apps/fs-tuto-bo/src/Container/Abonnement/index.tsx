import { useState } from 'react';
import { createStyles, Table, ScrollArea, rem } from '@mantine/core';
import Modal from '../../components/Modal'
import './Abonnement.scss'

const useStyles = createStyles((theme) => ({
  header: {
    position: 'sticky',
    top: 0,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    transition: 'box-shadow 150ms ease',

    '&::after': {
      content: '""',
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      borderBottom: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[2]
        }`,
    },
  },

  scrolled: {
    boxShadow: theme.shadows.sm,
  },
}));

interface TableScrollAreaProps {
  data: { label: string; prix: number; Nbvalide: number; Nbminimal: number; Nbcours: number }[];
}

export function Abonnement({ data }: TableScrollAreaProps) {
  const { classes, cx } = useStyles();
  const [scrolled, setScrolled] = useState(false);

  const rows = data.map((row) => (
    <tr key={row.label}>
      <td>{row.label}</td>
      <td>{row.prix}</td>
      <td>{row.Nbvalide}</td>
      <td>{row.Nbminimal}</td>
      <td>{row.Nbcours}</td>
    </tr>
  ));

  return (
    <div>
      <div className='modal'>
      <Modal/>  

      </div>
      <ScrollArea h={300} onScrollPositionChange={({ y }) => setScrolled(y !== 0)}>
        <Table miw={700}>
          <thead className={cx(classes.header, { [classes.scrolled]: scrolled })}>
            <tr>
              <th>label</th>
              <th>prix</th>
              <th>Nb jours valididé</th>
              <th>Nb jours minimal</th>
              <th>Nombre de cours</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </ScrollArea>
    </div>
  );
}
export default Abonnement;