import React from 'react'

function Home() {
    return (
        <div className='home'>
            <h3>
            Hi, I'm Maurice O'Sullivan, an aspiring front-end developer.
            I currently work at Amazon as an Analyst, and I graduated from the University of Michigan in 2019 with a degree in Economics and minor in Computer Science.
            </h3>
            <h3>
                {'\n'}
                Experience/ Languages & Tools I'm interested in: 
                <li>React</li>
                <li>Python</li>
                <li>AWS - S3, DynamoDB and Amplify</li>
                <li>C++ (but very rusty)</li>
            </h3>
            <h3>
                {'\n'}
                Books I've read recently: 
                <li>Dune by Frank Herbert</li>
                <li>A World Without Work by Daniel Susskind</li>
                <li>Exciting Times by Naoise Dolan </li>
                <li>This Naked Mind by Annie Grace </li>
                <li>The Vanishing Half by Brit Bennett </li>
                <li>Normal People by Sally Rooney </li>
                <li>Conversations with Friends by Sally Rooney </li>
                <li>Shuggie Bain by Douglas Stuart </li>
                <li>The Rule of Logistics by Jesse Lecavlier </li>
                <li>The Psycology of Money by Morgan Housel </li>
                <li>The Bin Ladens by Steve Coll </li>
            </h3>
        </div>
    )
}

export default Home;
