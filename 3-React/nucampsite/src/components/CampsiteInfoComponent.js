import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import { mapToCssModules } from 'reactstrap/lib/utils';
import { CAMPSITES } from '../shared/campsites.js';

class CampsiteInfo extends Component {

    renderCampsite(campsite) {
        return (<div className="col-md-5 m-1">
            <Card>
                <CardImg top src={campsite.image} alt={campsite.name} />
                <CardBody>
                    <CardTitle>{campsite.name}</CardTitle>
                    <CardText>{campsite.description}</CardText>
                </CardBody>
            </Card>
        </div>);
    }

    renderComments(comments) {
        if (comments) {
            return (
                <div className="col-md-5 m-1">
                    <h4>Comments.</h4>
                    {
                        comments.map(comment => {
                            return (
                                <div>
                                    <p>{comment.text}</p>
                                    <p>--{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</p>
                                </div>
                            )
                        })
                    }
                </div>
            )
        }<div />
    }

    render() {
        if (this.props.selectedCampsite) {
            console.log(this.props.selectedCampsite);
            return (
                <div className="row">
                    {this.renderCampsite(this.props.selectedCampsite)}
                    {this.renderComments(this.props.selectedCampsite.comments)}
                </div>
            );
        } else {
            return <div className="row" />
        }
    }
}    
export default CampsiteInfo;