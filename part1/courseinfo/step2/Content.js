import React from 'react'
import Part from './Part'
export default function Content() {
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14
  return (
    <>
    <Part part={part1} exercises={exercises1}></Part>
    <Part part={part2} exercises={exercises2}></Part>
    <Part part={part3} exercises={exercises3}></Part>
    </>
  )
}
