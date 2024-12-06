import styled from "./styles.module.sass";

interface TimerProps {
  sec: number;
}

const Timer = ({ sec }: TimerProps) => {
  return (
    <div className={styled.clock_content}>
      <p className={styled.clock}>{sec}</p>
    </div>
  );
};

export default Timer;