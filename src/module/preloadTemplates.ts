export const preloadTemplates = async function() {
	const templatePaths = [
		// Add paths to "modules/spell-list-importer/templates"
	];

	return loadTemplates(templatePaths);
}
