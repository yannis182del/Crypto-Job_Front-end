import React, { Component } from 'react'
import ArticleComponent from "./ArticleComponent"
import { connect } from "react-redux";
import { fetchJobs } from "../../redux/reducers/job";

import { Link } from "react-router-dom";

class JobArticle extends Component {

    componentWillMount() {
        this.props.fetchJobs();
    }
    render() {
        const { jobs } = this.props;
        return (
            <div>
                {
                    jobs.map(job => (
                        <Link
                            className="link-apply"
                            to={
                                `/jobs/${jobs._id}`

                            }
                        >
                            <ArticleComponent position_name={job.position_name} />
                        </Link>

                    ))
                }
            </div>
        )
    }
}

export default connect(
    state => ({
        jobs: state.job.jobs,
    }),
    { fetchJobs }
)(JobArticle);

