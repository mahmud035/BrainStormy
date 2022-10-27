import React from 'react';
import './FAQ.css';
import Accordion from 'react-bootstrap/Accordion';

const FAQ = () => {
  return (
    <div className="accordion-container">
      <h1>Frequently Asked Questions</h1>
      <Accordion className="w-50 mx-auto accordion-content" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            Who are the people these Courses are for?
          </Accordion.Header>

          <Accordion.Body>
            Those who want to learn various topics about Computer Science and
            move one step further.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            What experience do I need to get before enrolling in any course?
          </Accordion.Header>
          <Accordion.Body>
            There is a clear description of what you need to know before
            enrolling in any course on the course details page.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>How do I get the course video?</Accordion.Header>
          <Accordion.Body>
            Course videos will be pre-recorded. You open an account and enroll
            in this course. Videos will be given one module per day from the
            start of the course. Each module usually has 10 to 12 videos. You
            have to finish watching these videos within the day they are
            released. Therefore, dedicated time should be kept daily for the
            course. And during that time, you can watch the video lying down,
            standing, leaning, swinging your legs, dancing, or even hiding under
            the bed.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            If I am stuck somewhere when following the course, what should I do
            then?
          </Accordion.Header>
          <Accordion.Body>
            We have created different secret Facebook groups for the courses.
            Where we will have 14 professional web developers, we have a few
            other team members to guide and support you in other tasks. Our
            target is to answer all your questions within 24 hours. Most of the
            time instant reply is given. All replies will be received within 6-8
            hours on average. Moreover, if you can't solve the problem inside
            the code by writing (except Friday), there will be a few parallel
            meeting sessions three times every day. Where you can solve your
            problem by screen sharing. If you don't understand something well,
            it will be explained. What else does it take?
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            I have something else to know. Where do I ask?
          </Accordion.Header>
          <Accordion.Body>
            No tension. Feel free to send any questions you have to
            brain-stormy@gamil.com. We will reply as soon as possible.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default FAQ;
