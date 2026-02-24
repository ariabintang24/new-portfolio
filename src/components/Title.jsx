const Title = ({ title, desc }) => {
  return (
    <div className="text-center">
      <h2
        className="
        text-3xl sm:text-4xl font-semibold
        text-gray-900 dark:text-white
      "
      >
        {title}
      </h2>

      <p
        className="
        mt-2
        text-gray-600 dark:text-gray-400
      "
      >
        {desc}
      </p>
    </div>
  );
};

export default Title;
