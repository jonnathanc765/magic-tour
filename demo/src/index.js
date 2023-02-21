import { Step, TinyTour } from "rankmi-tour-example"
import "../node_modules/rankmi-tour-example/dist/style.css"
// console.log(styles);

const stepList = [];

stepList.push(new Step('target1',`<img width='200px' height='200px' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_8mOuhQjFs8296y7ITIxb_H6QrJRVekEFgkxRqn7KlTVBp6Vx5Jd2LSKBji4Yh7Tvywk&usqp=CAU">`,`Let me show you`))
stepList.push(new Step('target2','Title 2','Description2'))
stepList.push(new Step('target3','Title 3','Description3'))

new TinyTour(stepList);