import React from 'react'
import Heading from '../Helper/Heading'
import JobCategoryCard from '../Helper/JobCategoryCard'

const JobCategory = () => {
    return (
        <div className='pt-20 pb-12'>
            {/* Heading reusable compoent */}
            <Heading
                mainHeading="Popular job Categories"
                subHeading="2020 jobs live - 293 added today"
            />
            <div className='w-[80%] mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-[4rem] gap-[3rem]'>
                {/* JobCategoryCard componet */}
                <JobCategoryCard image="/images/icon1.png" category="Finance" openPosition="23" />
                <JobCategoryCard image="/images/icon2.png" category="Maketing" openPosition="13" />
                <JobCategoryCard image="/images/icon3.png" category="Design" openPosition="33" />
                <JobCategoryCard image="/images/icon4.png" category="Developement" openPosition="45" />
                <JobCategoryCard image="/images/icon5.png" category="Human Resource" openPosition="73" />
                <JobCategoryCard image="/images/icon6.png" category="Automotive Job" openPosition="03" />
                <JobCategoryCard image="/images/icon7.png" category="Customer Services" openPosition="90" />
                <JobCategoryCard image="/images/icon8.png" category="Health and Care" openPosition="44" />
                <JobCategoryCard image="/images/icon9.png" category="Project Management" openPosition="23" />

            </div>

        </div>
    )
}

export default JobCategory