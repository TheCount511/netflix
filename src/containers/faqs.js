import {Accordion} from '../components'
import Optform from '../components/opt-form';
import faqsData from '../fixtures/faqs.json';

export const FaqsContainer=()=>{
    return(
        <Accordion>
            <Accordion.Title>Frequently Asked Questions</Accordion.Title>
            {faqsData.map((item)=>(

                <Accordion.Item key = {item.id}>
                    <Accordion.Header>{item.header}</Accordion.Header>
                    <Accordion.Body>{item.body}</Accordion.Body>
                </Accordion.Item>
            ))}

            <Optform>
                <Optform.Input placeholder = "Email Address"/>
                <Optform.Button>Try it now</Optform.Button>
                <Optform.Break/>
                <Optform.Text>
                    Ready to Watch? Enter your email to create or restart your membership
                </Optform.Text>
            </Optform>
        </Accordion>
    )
}