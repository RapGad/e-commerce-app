import React from 'react'
import styles from './page.module.css'
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Award, Flame, Medal, Smile, Star, ThumbsUp, Trophy } from 'lucide-react'
import { Button } from '../ui/button'

const Process = () => {
  return (
    <main className={styles.main}>
        <h1>It's not Luck But Skill</h1>
        <div className={styles.steps}>
          <Card className={styles.cardContainer}>
            <CardHeader>
              <CardTitle>
                Step Number 1
              </CardTitle>
              <CardDescription className={styles.cardDescription}>
                First step to winning big<Flame fill='yellow' color='red' size={20}/>
              </CardDescription>
              <CardAction>
                <Button>Sign Up</Button>
                </CardAction>
            </CardHeader>
            <CardContent>
              <img src="/img42.png" alt="" />
              You join our ongoing auction <br/>
              You wait for the game...That easy <ThumbsUp fill='#FFD700' color='#FFD700' style={{display: 'inline'}}/>
            </CardContent>
          </Card>
          <Card className={styles.cardContainer}>
            <CardHeader>
              <CardTitle>
                Step Number 2
              </CardTitle>
              <CardDescription className={styles.cardDescription}>
                Play the Game<Flame fill='yellow' color='red' size={20}/>
              </CardDescription>
              <CardAction>
                <Button>Sign Up</Button>
                </CardAction>
            </CardHeader>
            <CardContent>
              <div className={styles.box}>
                <div className={styles.innerBox}>
                  <p>W</p>
                  <p>O</p>
                  <p>R</p>
                  <p>D</p>

                </div>
              </div>
              Use your Skill- <br/>
               Memory game, math or word games to win to win all three games per an auction
               <ThumbsUp fill='#FFD700' color='#FFD700' style={{display: 'inline'}}/>
            </CardContent>
          </Card>
          <Card className={styles.cardContainer}>
            <CardHeader>
              <CardTitle>
                Step Number 3
              </CardTitle>
              <CardDescription className={styles.cardDescription}>
                Win and get Your Item<Flame fill='yellow' color='red' size={20}/>
              </CardDescription>
              <CardAction>
                <Button>Sign Up</Button>
                </CardAction>
            </CardHeader>
            <CardContent>
              <img src="/img41.png" alt="" />
              <p>Have the highest score from the three games to claim your mega prize</p>

            </CardContent>
          </Card>

        </div>
      
    </main>
  )
}

export default Process
