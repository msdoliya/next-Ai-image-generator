import Image from 'next/image'
import { Inter } from 'next/font/google'
import logo from '@/assets/logo.svg'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })
import Hom from '@/components/Hom'
import Layout from '@/components/Layout'
import CreatePost from '@/components/CreatePost'

export default function Home() {
  return (
    
      <>
      <CreatePost/>
      </>
    
  )
}
