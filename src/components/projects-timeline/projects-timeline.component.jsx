import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";

// projects
import L_Covid19WorldStatsJS from "../../assets/img/projects/covid19-world-stats-js.png"
import L_Covid19IndiaStats from "../../assets/img/projects/covid19-india-stats.png"
import L_BudgetManager from "../../assets/img/projects/budget-manager.png";
import L_GitFinder from "../../assets/img/projects/git-User-Finder.png";
import L_ToDo from "../../assets/img/projects/live-todo.png";
import L_SmartBrain from "../../assets/img/projects/brain.webp";
import L_RoboFriends from "../../assets/img/projects/Robofriends.webp";
import L_ProductHuntClone from "../../assets/img/projects/product_hunt_clone.webp";
import L_PortfolioUsingDjango from "../../assets/img/projects/portfolioUsingDjango.webp";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

// skills
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_JS from "../../assets/img/skills/javascript.svg";
import L_MAPBOX from "../../assets/img/skills/mapbox.png";
import L_HEROKU from "../../assets/img/skills/heroku.svg";
import L_REACT from "../../assets/img/skills/react.svg";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import L_EXPRESS from "../../assets/img/skills/express.svg";
import L_POSTGRESQL from "../../assets/img/skills/postgresql.svg";
import L_DB from "../../assets/img/skills/mongodb.svg"
import Image from "react-bootstrap/Image";
import L_REDUX from "../../assets/img/skills/redux.svg";
import L_BOOTSTRAP4 from "../../assets/img/skills/bootstrap-4.svg";
import L_DJANGO from "../../assets/img/skills/django.svg";
import L_DIGITAL_OCEAN from "../../assets/img/skills/digital-ocean.svg";
import L_GIT from "../../assets/img/skills/github-api.svg";

import "./projects-timeline.styles.css";

const TimeLine = () => {
  return (
    <div id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
      <Timeline>
        <Events>
          {/* Project: covid19-world-stats-js */}
          <ImageEvent date="04/06/2020" className="text-center" text="covic19 world stats" src={L_Covid19WorldStatsJS} alt="Get GitHub Info">
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This will provide total number of confirmed cases, active cases, recovered cases and total deaths in whole world due to covid19 pandemic displayed over world map.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>covid19 world-level stats</li>
                          <li>do's and dont's</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image src={L_HTML5} alt="HTML 5" rounded className="image-style m-1"></Image> HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_CSS3} alt="CSS 3" rounded className="image-style m-1"></Image> CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_JS} alt="React" rounded className="image-style1 m-1"></Image> javascript
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_MAPBOX} alt="Github API" rounded className="image-style1 m-1"></Image> MapBox API
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton href="https://vsasvipul0605.github.io/covid19-world-stats-js/" target="_blank">
                  SEE LIVE
                </UrlButton>
                <UrlButton href="https://github.com/vsasvipul0605/covid19-world-stats-js" target="_blank">
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: covid19-india-stats */}
          <ImageEvent date="11/04/2020" className="text-center" text="covid19 India Stats" src={L_Covid19IndiaStats} alt="Smart Brain Face Detect">
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This will provide total number of confirmed cases, recovered cases and total deaths in India due to Corona Virus as well as state-wise details.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Real time stats</li>
                          <li>Informational Quotes</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image src="https://www.php.net/images/logos/new-php-logo.svg" alt="php" rounded className="image-style1 m-1"></Image> php
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_HEROKU } alt="heroku" rounded className="image-style1 m-1"></Image> Heroku
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton href="https://covidindiainfo.herokuapp.com/" target="_blank">
                  SEE LIVE
                </UrlButton>
                <UrlButton href="https://github.com/vsasvipul0605/covid19-india-stats" target="_blank">
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: budget Manager */}

          <ImageEvent date="13/04/2020" className="text-center" text="Budget Manager" src={L_BudgetManager} alt="Robo Friends">
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Manage your budget according to income and spend accordingly to control expenses.

                        {/* <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Search through Robots</li>
                          <li>Users and Robots being fetched via API call</li>
                          <li>Usage of Redux store</li>
                        </ul> */}
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                        <li>
                            <span className="p-2">
                              <Image src={L_HTML5} alt="HTML 5" rounded className="image-style m-1"></Image> HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_CSS3} alt="CSS 3" rounded className="image-style m-1"></Image> CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_JS} alt="React" rounded className="image-style1 m-1"></Image> javascript
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton href="https://vsasvipul0605.github.io/Budget-Manager/" target="_blank">
                  SEE LIVE
                </UrlButton>
                <UrlButton href="https://github.com/vsasvipul0605/Budget-Manager" target="_blank">
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: Git Finder */}

          <ImageEvent date="03/02/2020" className="text-center" text="Git Finder" src={L_GitFinder} alt="Product Hunt Clone">
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Enter a username to discover their GitHub profile.

                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Find any GitHub user profile.</li>
                          <li>Get various details like repos, following, followers and gists details.</li>
                          <li>Direct link to visit profile.</li>
                          <li>Latest repos details.</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image src={L_HTML5} alt="HTML 5" rounded className="image-style m-1"></Image> HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_CSS3} alt="CSS 3" rounded className="image-style m-1"></Image> CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_JS} alt="React" rounded className="image-style1 m-1"></Image> javascript
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_BOOTSTRAP4} alt="Bootstrap 4" rounded className="image-style m-1"></Image> Bootstrap 4
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_GIT} alt="Django" rounded className="image-style m-1"></Image> Github API
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton href="https://vsasvipul0605.github.io/gituserfinder/" target="_blank">
                  SEE LIVE
                </UrlButton>
                <UrlButton href="https://github.com/vsasvipul0605/gituserfinder" target="_blank">
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: To do */}
          <ImageEvent date="07/04/2020" className="text-center" text="To Do List" src={L_ToDo} alt="Portfolio using Django">
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Live working To-Do list connected with MongoDB Atlas and full backend support.

                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Save tods</li>
                          <li>Delete any todo</li>
                          <li>Save another todo at another dynamic link</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image src={L_HTML5} alt="HTML 5" rounded className="image-style m-1"></Image> HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_CSS3} alt="CSS 3" rounded className="image-style m-1"></Image> CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_JS} alt="React" rounded className="image-style1 m-1"></Image> javascript
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_BOOTSTRAP4} alt="Bootstrap 4" rounded className="image-style m-1"></Image> Bootstrap 4
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_NODE_JS} alt="Django" rounded className="image-style m-1"></Image> Node
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_EXPRESS} alt="PostgreSQL" rounded className="image-style1 m-1"></Image> Express
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_HEROKU } alt="heroku" rounded className="image-style1 m-1"></Image> Heroku
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_DB} alt="Digital Ocean" rounded className="image-style m-1"></Image> MongoDB
                            </span>
                          </li>
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton href="https://todobyvipul.herokuapp.com/" target="_blank">
                  SEE LIVE
                </UrlButton>
                <UrlButton href="https://github.com/vsasvipul0605/live-to-do" target="_blank">
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
        </Events>
      </Timeline>
    </div>
  );
};

export default TimeLine;
