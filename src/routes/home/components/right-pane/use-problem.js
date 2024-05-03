import problems from '../../../../lib/dsa-problems'
import { useEffect, useState } from "react"

export const useProblem = () => {
    const [problem, setProblem] = useState()
    const [refresh, setRefresh] = useState()

    const toggleProblemType = () => {
        const giveOldProblem = localStorage.getItem('give_old_problem') || 'no'
        localStorage.setItem('give_old_problem', giveOldProblem === 'no' ? 'yes' : 'no')
    }
    const handleDone = () => {
        localStorage.setItem(problem.substring(0, 20), Date.now());

        toggleProblemType()
        handleRefresh()
    }
    const handleRefresh = () => {
        setRefresh(!refresh)
    }
    const showNewProblem = () => {
        const currHour = new Date().getHours()
        return currHour >= 9 && currHour < 18
    }
    useEffect(() => {
        let problem
        let repeatCount = 0
        while (repeatCount < 20) {
            let randomNum = Math.floor(Math.random() * (problems.length + 2))
            randomNum = Math.min(problems.length - 1, randomNum)

            problem = problems[randomNum]
            if (problem) {
                const lastDateTS = parseInt(localStorage.getItem(problem.substring(0, 20)), 10)
                const diff = Date.now() - lastDateTS
                let days = Math.ceil(diff / 1000 / 60 / 60 / 24)
                if ((showNewProblem() && !days) || (!showNewProblem() && days >= 20)) {
                    !days && console.log('untouched problem')
                    days && console.log(days + ' days old')
                    break
                }
                repeatCount++
            } else {
                console.error(problem, randomNum)
            }
        }
        repeatCount && console.log(`Crossed ${repeatCount} problems`)
        setProblem(problem)
    }, [refresh])

    return [problem, handleRefresh, handleDone]
}