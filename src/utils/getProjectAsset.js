export default function getProjectAsset(projectId, file) {
  return new URL(
    `/src/assets/behance/${projectId}/${file}.webp`,
    import.meta.url
  ).href;
}
