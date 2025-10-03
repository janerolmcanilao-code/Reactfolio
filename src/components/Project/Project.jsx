// Project.jsx

const Project = ({
  projectName,
  projectDescription,
  projectURL,
  githubRepository,
  tags,
  date,
  image,
}) => {
  return (
    <div className="project-card bg-white rounded-xl shadow-lg p-4">
      {/* Project Image */}
      {image && (
        projectURL ? (
          <a href={projectURL} target="_blank" rel="noopener noreferrer">
            <img
              src={image}
              alt={projectName}
              className="w-full h-48 object-cover rounded-lg mb-4 cursor-pointer hover:opacity-80 transition"
            />
          </a>
        ) : (
          <img
            src={image}
            alt={projectName}
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
        )
      )}

      {/* Project Info */}
      <h3 className="text-xl font-semibold">{projectName}</h3>
      <p className="text-gray-600">{projectDescription}</p>

      {/* Tags */}
      <div className="flex gap-2 mt-2 flex-wrap">
        {Array.isArray(tags) &&
          tags.map((tag, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
      </div>

      {/* Links */}
      <div className="mt-3 flex gap-4">
        {projectURL && (
          <a
            href={projectURL}
            target="_blank"
            className="text-white bg-blue-500 px-3 py-1 rounded-lg hover:bg-blue-600 transition"
          >
            Live
          </a>
        )}
        {githubRepository && (
          <a
            href={githubRepository}
            target="_blank"
            className="text-white bg-gray-800 px-3 py-1 rounded-lg hover:bg-gray-900 transition"
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  );
};

export default Project;
