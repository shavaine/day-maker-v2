import { FC } from "react";

const GettingStartedCard: FC = () => {
  return (
    <section className="flex flex-col gap-y-10 p-5 sm:p-10 bg-white drop-shadow-md rounded-md font-workSans">
      <article className="flex flex-col gap-y-2 text-lg">
        <h2 className="text-2xl text-mainColor font-bold">
          1. Create Reusable Actions
        </h2>
        <p>
          Actions are the building blocks of your tasks and schedules in
          Daymaker. To get started:
        </p>
        <ol>
          <li className="list-disc ml-5">
            Click on the <strong>Actions</strong> tab in the navigation menu.
          </li>
          <li className="list-disc ml-5">
            Create reusable actions that represent tasks or activities you
            frequently perform. For example, you can create actions like
            <strong> Meetings</strong>, <strong>Emails</strong>, or{" "}
            <strong>Exercise</strong>
          </li>
        </ol>
        <p>
          <strong>Tip: </strong>
          Actions should be general and versatile to be easily reused across
          various tasks.
        </p>
      </article>
      <article className="flex flex-col gap-y-2 text-lg">
        <h2 className="text-2xl text-mainColor font-bold">
          2. Build Templates
        </h2>
        <p>
          Templates help you organize your recurring schedules efficiently. To
          create templates:
        </p>
        <ol>
          <li className="list-disc ml-5">
            Navigate to the <strong>Templates</strong> section.
          </li>
          <li className="list-disc ml-5">
            Start by adding a template name and description.
          </li>
          <li className="list-disc ml-5">
            Add tasks to your template, selecting from your reusable actions
            created earlier.
          </li>
        </ol>
        <p>
          <strong>Note: </strong>
          You can add multiple tasks to a template, making it perfect for
          structuring your daily routines or weekly plans.
        </p>
      </article>
      <article className="flex flex-col gap-y-2 text-lg">
        <h2 className="text-2xl text-mainColor font-bold">
          3. Schedule Your Day
        </h2>
        <p>
          Once you`ve created reusable actions and templates, it`s time to
          schedule your day:
        </p>
        <ol>
          <li className="list-disc ml-5">
            Go to the <strong>Schedules</strong> tab.
          </li>
          <li className="list-disc ml-5">Select a date on the calendar.</li>
          <li className="list-disc ml-5">
            Choose a template from your list and assign it to the selected date.
          </li>
        </ol>
        <p>
          Daymaker will automatically generate a schedule for the chosen date,
          including all the tasks from your template.
        </p>
        <p>
          <strong>Important: </strong>
          Deleting an action will also delete all tasks using that action.
          Similarly, deleting a template will remove all schedules associated
          with it.
        </p>
      </article>
      <article className="flex flex-col gap-y-2 text-lg">
        <h2 className="text-2xl text-mainColor font-bold">
          4. Stay Organized and Productive
        </h2>
        <p>
          With your tasks and schedules set up, you`re ready to make the most of
          your day:
        </p>
        <ol>
          <li className="list-disc ml-5">
            Use the calendar view to see your upcoming schedules.
          </li>
          <li className="list-disc ml-5">
            Check off tasks as you complete them to track your progress.
          </li>
          <li className="list-disc ml-5">
            Create new schedules for future dates, ensuring you stay on top of
            your commitments.
          </li>
        </ol>
      </article>
      <article className="flex flex-col gap-y-2 text-lg">
        <h2 className="text-2xl text-mainColor font-bold">Additional Notes</h2>
        <ol>
          <li className="list-disc ml-5">
            <strong>Responsive Design:</strong> Our application is fully
            responsive, so you can access it effectively on any device or screen
            size.
          </li>
        </ol>
        <p>
          Now that you`re familiar with the basics of Daymaker, start organizing
          your day, boosting your productivity, and regaining control of your
          schedule. If you have any questions or need further assistance, please
          don`t hesitate to reach out to our support or check our documentation
          for more details.
        </p>
      </article>
    </section>
  );
};
export default GettingStartedCard;
