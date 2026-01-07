import './App.css'
import { useState, useEffect } from 'react'

const App = () => {
  const [message, setMessage] = useState<string>('')
  const [likes, setLikes] = useState<number>(0)
  const [color, setColor] = useState<boolean>(true)

  const handleMessage = () => {
    setMessage('Hello from React!')
  }

  const handleIncrement = () => {
    setLikes((current) => current + 1)
  }

  const handleToggle = () => {
    setColor((current) => !current)
  }

  useEffect(() => {
    console.log(`Updated message: ${message}`)
  }, [message])

  useEffect(() => {
    alert(`Likes updated to ${likes}!`)
  }, [likes])

  useEffect(() => {
    console.log(`Changed the color to ${color ? 'red' : 'blue'}`)
  }, [color])

  return (
    <div className="p-2">
      <h2 className="text-2xl mt-7 mb-1">Message Logger</h2>
      <button onClick={handleMessage} className="bg-yellow-500 text-white rounded-xl px-4 py-2 hover:cursor-pointer">Send Message</button>

      <h2 className="text-2xl mt-7 mb-1">Like Counter</h2>
      <button onClick={handleIncrement} className="bg-yellow-500 text-white rounded-xl px-4 py-2 hover:cursor-pointer">Like</button>
      <p className="mt1">❤️ {likes}</p>

      <h2 className="text-2xl mt-7 mb-1">Color Box</h2>
      <button onClick={handleToggle} className="bg-yellow-500 text-white rounded-xl px-4 py-2 hover:cursor-pointer">Change Color</button>
      <div style={{ width: 100, height: 100, background: color ? 'red' : 'blue' }} className="text-white mt-4">Color Box</div>
    </div>
  )
}

export default App
