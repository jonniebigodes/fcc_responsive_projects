import React, { Component } from "react"
import {
  FormInput,
  FormNumber,
  FormSelect,
  FormTextArea,
  FormFieldset,
  FormButton,
  FormWrapper,
  FormHeader,
  FormHeading,
  FormDescription,
  Form,
} from "./StyledForm"

import "../../../assets/css/SurveyForm.css"

class SurveyForm extends Component {
  state = {
    Name: "",
    Email: "",
    Age: 0,
    CurrentRole: "student",
    FCCLike: "nooption",
    Comments: "",
    SelectedRecommendation: "Definit",
    FrontEndChecked: false,
    BackendChecked: false,
    DataVisChecked: false,
    CommunityChecked: false,
    ChallengesChecked: false,
    GitterRoomsChecked: false,
    VideosChecked: false,
    MeetupsChecked: false,
    WikiChecked: false,
    ForumChecked: false,
    CoursesChecked: false,
  }

  handleSubmit = event => {
    event.preventDefault()
  }

  onChangeName = e => {
    this.setState({ Name: e.target.value })
  }

  onChangeEmail = e => {
    this.setState({ Email: e.target.value })
  }

  onChangeComments = e => {
    this.setState({ Comments: e.target.value })
  }

  onChangeAge = e => {
    this.setState({ Age: e.target.value })
  }

  setCurrentRole = e => {
    this.setState({ CurrentRole: e.target.value })
  }

  setFCCLike = e => {
    this.setState({ FCCLike: e.target.value })
  }

  setFrontEndChecked = () => {
    this.setState(prevState => ({
      FrontEndChecked: !prevState.FrontEndChecked,
    }))
  }

  setBackendChecked = () => {
    this.setState(prevState => ({
      BackendChecked: !prevState.BackendChecked,
    }))
  }

  setDataVisChecked = () => {
    this.setState(prevState => ({
      DataVisChecked: !prevState.DataVisChecked,
    }))
  }

  setChallengesChecked = () => {
    this.setState(prevState => ({
      ChallengesChecked: !prevState.ChallengesChecked,
    }))
  }

  setCommunityChecked = () => {
    this.setState(prevState => ({
      CommunityChecked: !prevState.CommunityChecked,
    }))
  }

  setGitterRoomsChecked = () => {
    this.setState(prevState => ({
      GitterRoomsChecked: !prevState.GitterRoomsChecked,
    }))
  }

  setVideosChecked = () => {
    this.setState(prevState => ({
      VideosChecked: !prevState.VideosChecked,
    }))
  }

  setMeetupsChecked = () => {
    this.setState(prevState => ({
      MeetupsChecked: !prevState.MeetupsChecked,
    }))
  }

  setWikiChecked = () => {
    this.setState(prevState => ({
      WikiChecked: !prevState.WikiChecked,
    }))
  }

  setForumChecked = () => {
    this.setState(prevState => ({
      ForumChecked: !prevState.ForumChecked,
    }))
  }

  setCoursesChecked = () => {
    this.setState(prevState => ({
      CoursesChecked: !prevState.CoursesChecked,
    }))
  }

  setRecomendation = e => {
    this.setState({ SelectedRecommendation: e.target.value })
  }

  render() {
    const {
      Name,
      Email,
      Age,
      Comments,
      CurrentRole,
      FCCLike,
      FrontEndChecked,
      BackendChecked,
      DataVisChecked,
      ChallengesChecked,
      CommunityChecked,
      GitterRoomsChecked,
      VideosChecked,
      MeetupsChecked,
      WikiChecked,
      ForumChecked,
      CoursesChecked,
      SelectedRecommendation,
    } = this.state

    return (
      <FormWrapper>
        <FormHeader>
          <FormHeading id="title">Survey Form</FormHeading>
          <FormDescription id="description">
            Let us know how we can improve freeCodeCamp
          </FormDescription>
        </FormHeader>
        <Form id="survey-form" onSubmit={this.handleSubmit}>
          <FormFieldset>
            <label htmlFor="name" id="name-label">
              <FormInput
                type="text"
                name="name"
                id="name"
                required
                placeholder="Enter your Name"
                value={Name}
                onChange={this.onChangeName}
                aria-describedby="name-desc"
              />
              <small id="name-desc" className="f6 black-60 db mb2">
                Name*
              </small>
            </label>
          </FormFieldset>
          <FormFieldset>
            <label htmlFor="email" id="email-label">
              <FormInput
                type="email"
                required
                name="email"
                id="email"
                placeholder="Insert a valid email address"
                value={Email}
                onChange={this.onChangeEmail}
                aria-describedby="email-desc"
              />
              <small id="email-desc" className="f6 black-60 db mb2">
                Email*
              </small>
            </label>
          </FormFieldset>
          <FormFieldset>
            <label htmlFor="number" id="number-label">
              <FormNumber
                required
                name="age"
                id="number"
                min="1"
                max="130"
                placeholder="0"
                value={Age}
                onChange={this.onChangeAge}
                aria-describedby="age-desc"
              />
              <small id="age-desc" className="f6 black-60 db mb2">
                Age*
              </small>
            </label>
          </FormFieldset>
          <FormFieldset>
            <div>
              <small id="age-desc" className="f6 black-60 db mb2">
                How likely is that you would recommend freeCodeCamp to a friend?
                *
              </small>
            </div>
            <div className="listCheckBoxes">
              <label htmlFor="radio_def">
                <input
                  type="radio"
                  id="radio_def"
                  name="fcc_recomendation"
                  value="Definit"
                  checked={SelectedRecommendation === "Definit"}
                  onChange={this.setRecomendation}
                />
                <span>Definitely</span>
              </label>
              <label htmlFor="radio_Maybe">
                <input
                  type="radio"
                  id="radio_Maybe"
                  name="fcc_recomendation"
                  value="Maybe"
                  checked={SelectedRecommendation === "Maybe"}
                  onChange={this.setRecomendation}
                />
                <span>Maybe</span>
              </label>
              <label htmlFor="radio_NotS">
                <input
                  type="radio"
                  id="radio_NotS"
                  name="fcc_recomendation"
                  value="NotSure"
                  checked={SelectedRecommendation === "NotSure"}
                  onChange={this.setRecomendation}
                />
                <span>Not sure</span>
              </label>
            </div>
          </FormFieldset>
          <FormFieldset>
            <label htmlFor="current_role" id="current_role">
              <FormSelect
                id="current_role"
                onChange={this.setCurrentRole}
                value={CurrentRole}
              >
                <option value="student">Student</option>
                <option value="ftLob">Full Time Job</option>
                <option value="ftLearner">Full Time Learner</option>
                <option value="notSaying">Prefer not to say</option>
                <option value="other">Other</option>
              </FormSelect>
              <small className="f6 black-60 db mb2">
                Which option best describes your current role?
              </small>
            </label>
          </FormFieldset>
          <FormFieldset>
            <label htmlFor="dropdown" id="label_like">
              <FormSelect
                id="dropdown"
                value={FCCLike}
                onChange={this.setFCCLike}
              >
                <option disabled value="nooption">
                  Select an option
                </option>
                <option value="challenges">Challenges</option>
                <option value="projects">Projects</option>
                <option value="community">Community</option>
                <option value="openSource">Open Source</option>
              </FormSelect>
              <small className="f6 black-60 db mb2">
                What do you like most in FCC:
              </small>
            </label>
          </FormFieldset>
          <FormFieldset>
            <small className="f6 black-60 db mb2">
              Things that should be improved in the future (Check all that
              apply):
            </small>
            <div className="listCheckBoxes">
              <div>
                <label htmlFor="survey-form-improve1">
                  <input
                    type="checkbox"
                    value={0}
                    id="survey-form-improve1"
                    checked={FrontEndChecked}
                    onChange={this.setFrontEndChecked}
                  />
                  <span style={{ marginLeft: 8 }}>Front-end Projects</span>
                </label>
              </div>
              <div>
                <label htmlFor="survey-form-improve2">
                  <input
                    type="checkbox"
                    value={1}
                    id="survey-form-improve2"
                    checked={BackendChecked}
                    onChange={this.setBackendChecked}
                  />
                  <span style={{ marginLeft: 8 }}>Back-end Projects</span>
                </label>
              </div>
              <div>
                <label htmlFor="survey-form-improve3">
                  <input
                    type="checkbox"
                    value={0}
                    id="survey-form-improve3"
                    checked={DataVisChecked}
                    onChange={this.setDataVisChecked}
                  />
                  <span style={{ marginLeft: 8 }}>Data Visualization</span>
                </label>
              </div>
              <div>
                <label htmlFor="survey-form-improve4">
                  <input
                    type="checkbox"
                    value={0}
                    id="survey-form-improve4"
                    checked={ChallengesChecked}
                    onChange={this.setChallengesChecked}
                  />
                  <span style={{ marginLeft: 8 }}>Challenges</span>
                </label>
              </div>
              <div>
                <label htmlFor="survey-form-improve5">
                  <input
                    type="checkbox"
                    value={5}
                    id="survey-form-improve5"
                    checked={CommunityChecked}
                    onChange={this.setCommunityChecked}
                  />
                  <span style={{ marginLeft: 8 }}>Open Source Community</span>
                </label>
              </div>
              <div>
                <label htmlFor="survey-form-improve6">
                  <input
                    type="checkbox"
                    value={0}
                    id="survey-form-improve6"
                    checked={GitterRoomsChecked}
                    onChange={this.setGitterRoomsChecked}
                  />
                  <span style={{ marginLeft: 8 }}>Gitter help rooms</span>
                </label>
              </div>
              <div>
                <label htmlFor="survey-form-improve7">
                  <input
                    type="checkbox"
                    value={0}
                    id="survey-form-improve7"
                    checked={VideosChecked}
                    onChange={this.setVideosChecked}
                  />
                  <span style={{ marginLeft: 8 }}>Videos</span>
                </label>
              </div>
              <div>
                <label htmlFor="survey-form-improve8">
                  <input
                    type="checkbox"
                    value={0}
                    id="survey-form-improve8"
                    checked={MeetupsChecked}
                    onChange={this.setMeetupsChecked}
                  />
                  <span style={{ marginLeft: 8 }}>Meetups</span>
                </label>
              </div>
              <div>
                <label htmlFor="survey-form-improve9">
                  <input
                    type="checkbox"
                    value={0}
                    id="survey-form-improve9"
                    checked={WikiChecked}
                    onChange={this.setWikiChecked}
                  />
                  <span style={{ marginLeft: 8 }}>Wiki</span>
                </label>
              </div>
              <div>
                <label htmlFor="survey-form-improve10">
                  <input
                    type="checkbox"
                    value={0}
                    id="survey-form-improve10"
                    checked={ForumChecked}
                    onChange={this.setForumChecked}
                  />
                  <span style={{ marginLeft: 8 }}>Forum</span>
                </label>
              </div>
              <div>
                <label htmlFor="survey-form-improve11">
                  <input
                    type="checkbox"
                    value={0}
                    id="survey-form-improve11"
                    checked={CoursesChecked}
                    onChange={this.CoursesChecked}
                  />
                  <span style={{ marginLeft: 10 }}>Additional Courses</span>
                </label>
              </div>
            </div>
          </FormFieldset>
          <FormFieldset>
            <FormTextArea
              id="comments"
              value={Comments}
              onChange={this.onChangeComments}
              placeholder="Comments and Suggestions go here"
            />
            <small id="comments-desc" className="f6 black-60 db mb2">
              Feel free to provide comments or suggestions
            </small>
          </FormFieldset>
          <FormFieldset>
            <FormButton type="submit" id="submit">
              Submit
            </FormButton>
          </FormFieldset>
        </Form>
      </FormWrapper>
    )
  }
}

export default SurveyForm
