import { useProblem } from './use-problem';
import { useTimer } from './use-timer';
import * as STYLES from './style-right-pane'

export const HomeRightPane = () => {
    const [problem, handleRefresh, handleDone] = useProblem()
    const [secondsSpent, handleTimer] = useTimer()

    return <STYLES.Container>
        <STYLES.StickyContainer>
            <STYLES.ProblemContainer>
                <h2>Solve this Problem</h2>
                <STYLES.RefreshButton onClick={handleRefresh}>Shuffle</STYLES.RefreshButton>
                <STYLES.DoneButton onClick={handleDone}>Done</STYLES.DoneButton>
            </STYLES.ProblemContainer>
            {problem}
            <STYLES.Timer>
                <STYLES.TimerCTA $time={secondsSpent} onClick={handleTimer}>
                    {secondsSpent === 0 ? 'Start timer' : 'Stop timer'}
                </STYLES.TimerCTA>
                <STYLES.Time>
                    {`${Math.floor(secondsSpent / 60)} m : ${secondsSpent % 60} s`}
                </STYLES.Time>
            </STYLES.Timer>
        </STYLES.StickyContainer>
    </STYLES.Container>
}