import { Story, Meta } from '@storybook/angular/types-6-0';
import Task from './task-list.component';

export default {
    title: 'Example/Task',
    component: Task,
    // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
    argTypes: {
      backgroundColor: { control: 'color' },
    },
  } as Meta;

  // More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<Task> = (args: Task) => ({
    props: args,
  });


  export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Primary.args = {
  heading: 'Provided heading',
};

