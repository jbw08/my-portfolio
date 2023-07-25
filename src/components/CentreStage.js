import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
 import portImage from '../assets/images/portImage.png';
 
export default function CentreStage() {
  return (
    <Card className="block rounded-lg shadow-lg mr-6 ml-6 pt-6 pb-6">
      <CardHeader floated={false} className="relative w-80 h-80 mx-auto rounded-full overflow-hidden">
          <img src={ portImage } alt="JBW"/>
      </CardHeader> 
      <CardBody className="text-center pt-6 ml-6 mr-6">
        {/* <Typography variant="h4" color="blue-gray" className="mb-2 pt-6 font-bold">
          Hey! I'm Joshua Blake-Williams :)
        </Typography> */}
        <Typography color="blue" className="sticky font-medium" textGradient>
          I'm a Fullstack developer Based in the United Kingdom.
          My experience involves the bespoke creation of varying projects across disciplines. <br/>
          Feel free to hang around for a while and get to know me :)
        </Typography>
      </CardBody>
      <CardFooter className="flex justify-center gap-7 pt-2">
        <Tooltip content="Like">
          <Typography
            as="a"
            href="#facebook"
            variant="lead"
            color="blue"
            textGradient
          >
            <i className="fab fa-facebook" />
          </Typography>
        </Tooltip>
        <Tooltip content="Follow">
          <Typography
            as="a"
            href="#twitter"
            variant="lead"
            color="light-blue"
            textGradient
          >
            <i className="fab fa-twitter" />
          </Typography>
        </Tooltip>
        <Tooltip content="Follow">
          <Typography
            as="a"
            href="#instagram"
            variant="lead"
            color="purple"
            textGradient
          >
            <i className="fab fa-instagram" />
          </Typography>
        </Tooltip>
      </CardFooter>
    </Card>
  );
  }