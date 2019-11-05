import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Draggable, {DraggableCore} from 'react-draggable'; // Both at the same time

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    background: '#222',
    color: '#fff',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function DraggableCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Grid container spacing={3}>
      <Grid item>
        <Card className={classes.card} dark>
          <CardContent>
            Word of the Day
          </CardContent>
        </Card>
      </Grid>
      <Grid item>
        <Card className={classes.card} dark>
          <CardContent>
            Word of the Day
          </CardContent>
        </Card>
      </Grid>
      <Grid item>
        <Card className={classes.card} dark>
          <CardContent>
            Word of the Day
          </CardContent>
        </Card>
      </Grid>

      <Draggable
        axis="x"
        handle=".handle"
        defaultPosition={{x: 0, y: 0}}
        position={null}
        grid={[25, 25]}
        scale={1}
       >
        <div>
          <div className="handle">Drag from here</div>
          <div>This readme is really dragging on...</div>
        </div>
      </Draggable>
    </Grid>
  );
}
