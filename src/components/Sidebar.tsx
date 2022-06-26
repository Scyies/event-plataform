import { useGetLessonsQuery } from "../graphql/generated";
import { Lesson } from "./Lesson";
import classNames from 'classnames';

interface EventProps {
  showMenu: boolean;
}

export function Sidebar(props: EventProps) {
  const { data } = useGetLessonsQuery();

  return (
    <aside className={classNames("w-full sm:w-[348px] bg-gray-700 p-6 border-l border-gray-600 sm:block fixed sm:relative z-40 transition-all ease-in-out duration-150", {
      'h-full transform translate-x-0': props.showMenu,
      'transform translate-x-full sm:translate-x-0': !props.showMenu
    })}>
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma de aulas
      </span>

      <div className="flex flex-col gap-8">
        {data?.lessons.map(lesson => {
          return (
            <Lesson 
              key={lesson.id}
              title={lesson.title}
              slug={lesson.slug}
              availableAt={new Date(lesson.availableAt)}
              type={lesson.lessonType}
            />
          )
        })}
      </div>
    </aside>
  )
}
