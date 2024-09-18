export default function ReadMore({
  text,
  maxLength,
}: {
  text: string;
  maxLength: number;
}) {
  const truncatedText =
    text.length > maxLength ? text.substring(0, maxLength) + "..." : text;

  return (
    <div>
      <input type="checkbox" id="readMoreToggle" className="hidden peer" />
      <p
        className="peer-checked:hidden"
        dangerouslySetInnerHTML={{
          __html: truncatedText.replaceAll("\n", "<br />"),
        }}
      />
      {text.length <= maxLength && (
        <>
          <label
            htmlFor="readMoreToggle"
            className="text-blue-500 hover:underline cursor-pointer peer-checked:hidden"
          >
            Read More
          </label>
          <div className="hidden peer-checked:block">
            <p
              dangerouslySetInnerHTML={{
                __html: text.replaceAll("\n", "<br />"),
              }}
            />
            <label
              htmlFor="readMoreToggle"
              className="text-blue-500 hover:underline cursor-pointer"
            >
              Read Less
            </label>
          </div>
        </>
      )}
    </div>
  );
}
