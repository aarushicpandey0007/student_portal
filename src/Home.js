import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Home.css';
import { GiBookshelf } from 'react-icons/gi';
import { MdOutlineFoodBank } from 'react-icons/md';
import { BiTimer } from 'react-icons/bi';
import { VscTable } from 'react-icons/vsc';
import { MdOutlineFestival } from 'react-icons/md';
import { MdContactPhone } from 'react-icons/md';

export default function Home(props) {

  let link = '';
  if (props.course + props.year + props.stream === 'BTech1CSE') { link = 'https://uktech.ac.in/newsletter/Syllabus/New-Syllabus-2022/B-Tech/BTECH_SYLLABUS.pdf'; }
  else if (props.course + props.year + props.stream === 'BTech1ECE') { link = 'https://uktech.ac.in/newsletter/Syllabus/New-Syllabus-2022/B-Tech/BTECH_SYLLABUS.pdf'; }
  else if (props.course + props.year + props.stream === 'BTech2CSE') { link = 'https://uktech.ac.in/site/writereaddata/siteContent/202301231218141006B-Tech-II-Year-CSE-Syllabus-2019-20.pdf'; }
  else if (props.course + props.year + props.stream === 'BTech2ECE') { link = 'https://uktech.ac.in/site/writereaddata/siteContent/202301231217327552B-Tech-II-Year-ECE-Syllabus-2019-20.pdf'; }
  else if (props.course + props.year + props.stream === 'BTech3CSE') { link = 'https://uktech.ac.in/site/writereaddata/siteContent/202301241823077911CSE2020.pdf'; }
  else if (props.course + props.year + props.stream === 'BTech3ECE') { link = 'https://uktech.ac.in/site/writereaddata/siteContent/202301241823581993EC2020.pdf'; }
  else if (props.course + props.year + props.stream === 'BTech4CSE') { link = 'https://uktech.ac.in/site/writereaddata/siteContent/202301241823077911CSE2020.pdf'; }
  else if (props.course + props.year + props.stream === 'BTech4ECE') { link = 'https://uktech.ac.in/site/writereaddata/siteContent/202301241823581993EC2020.pdf'; }
  else if (props.course + props.year + props.stream === 'MCA1') { link = 'https://uktech.ac.in/newsletter/Syllabus/New-Syllabus-2022/MCA/MCA-SYLLABUS.pdf'; }
  else if (props.course + props.year + props.stream === 'MCA2') { link = 'https://uktech.ac.in/newsletter/Syllabus/New-Syllabus-2022/MCA/MCA-SYLLABUS.pdf'; }

  return (
    <div className="page" id="home">
      <div class="jumbotron">
        <div class="container intro">
          <h1 class="display-3 main-heading"> Hello, {props.name.substring(0, props.name.indexOf(' '))}</h1>
          <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <h2 className="sub-heading">Syllabus</h2>
            <GiBookshelf className='icon' />
            <Link class="btn btn-secondary" to={link} target="_blank" role="button">View Syllabus &raquo;</Link>
          </div>
          <div class="col-md-4">
            <h2 className="sub-heading">Time Table</h2>
            <VscTable className='icon' />
            <Link class="btn btn-secondary" to={'/tt' + props.course + props.year + props.stream} role="button">View Time Table &raquo;</Link>
          </div>
          <div class="col-md-4" hidden={props.daysch}>
            <h2 className="sub-heading" >Mess Menu</h2>
            <MdOutlineFoodBank className='icon' />
            <Link class="btn btn-secondary" to='/messmenu' role="button">View Mess Menu &raquo;</Link>
          </div>
          <div class="col-md-4" hidden={props.daysch}>
            <h2 className="sub-heading">Mess Timing</h2>
            <BiTimer className='icon' />
            <Link class="btn btn-secondary" to='/messtime' role="button">View Mess Timing &raquo;</Link>
          </div>
          <div class="col-md-4">
            <h2 className="sub-heading">Holidays</h2>
            <MdOutlineFestival className='icon' />
            <Link class="btn btn-secondary" to="/holidays" role="button">View Holidays &raquo;</Link>
          </div>
          <div class="col-md-4">
            <h2 className="sub-heading">Important Contacts</h2>
            <MdContactPhone className='icon' />
            <Link class="btn btn-secondary" to="/contacts" role="button">View Contacts &raquo;</Link>
          </div>
          <div class="col-md-4">
            <h2 className="sub-heading">Todo List</h2>
            <MdContactPhone className='icon' />
            <Link class="btn btn-secondary" to="/todolist" role="button">Todo List &raquo;</Link>
          </div>
        </div>
      </div>

    </div>
  )
}
