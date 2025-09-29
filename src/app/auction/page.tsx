import React from "react";
import styles from "./page.module.css";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
} from "@/components/ui/table";

const users = [
  { id: 1, name: "User 1", points: 1 },
  { id: 2, name: "User 2", points: 2 },
  { id: 3, name: "User 3", points: 3 },
  { id: 4, name: "User 4", points: 4 },
];
const AuctionPage = () => {
  return (
    <main className={styles.main}>
      <section className={styles.gameContainer}>
        <p>Time Remaining=&gt; 10: 00</p>
        <article className={styles.gameView}>gameView</article>
        <div className={styles.inputContainer}>
          <Input placeholder="answer..." className={styles.inputField} />
          <Button>Send</Button>
        </div>

        <div className={styles.prizeContainer}>prize</div>
      </section>

      <section className={styles.leaderTable}>
        <Table>
          <TableCaption>Scores</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">No</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Points</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="font-medium">{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.points}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
    </main>
  );
};

export default AuctionPage;
