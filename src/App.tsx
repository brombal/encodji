import { useEffect, useState } from "react";
import $, { StylixProvider, useGlobalStyles } from "@stylix/core";
import { allEmojis, decodji, encodji, removeNonEmoji, splitter } from "./encodji";

export default function App() {
  const [plain, setPlain] = useState('“When you are a Bear of Very Little Brain, and you Think of Things, you find sometimes that a Thing which seemed very Thingish inside you is quite different when it gets out into the open and has other people looking at it.”');
  const [emoji, setEmoji] = useState(encodji(plain));

  useGlobalStyles({
    "*": {
      boxSizing: "border-box",
      border: 0,
      padding: 0,
      margin: 0,
      outline: 0,
    },
    "html, body": {
      height: "100%",
    },
    body: {
      font: "18px sans-serif",
    },
  });

  const [showWTF, setShowWTF] = useState(false);

  useEffect(() => {
    const pathEmoji = decodeURIComponent(window.location.pathname.split("/")[1]).trim();
    if (pathEmoji) {
      setEmoji(pathEmoji);
      setPlain(decodji(pathEmoji));
    }
  }, []);

  return (
    <StylixProvider media={["", "(max-width: 900px)"]}>
      <$.div height="100vh" display="flex" flex-direction="column" background="#e8e8e8">
        <$.div
          flex="0 0 auto"
          display="flex"
          justify-content="center"
          align-items="flex-start"
          padding="0 20px 20px"
          position="relative"
					height={[80, 140]}
        >
          <$.div
            position="absolute"
            left={20}
            bottom={10}
            display="flex"
            align-items="center"
            font-weight="bold"
            font-size={20}
            color="#888"
          >
            <$.span margin-right={10}>👇</$.span>
            <$.span>type or paste text here</$.span>
          </$.div>

          <$.div
            background="#5E35B1"
            border-radius="0 0 10px 10px"
            padding="12px 24px"
            color="white"
            font-weight="bold"
            font-size={30}
          >
            encodji / {encodji("encodji")}
          </$.div>

          <$.div
            position="absolute"
            right={20}
            bottom={[20, 2]}
            color="#5E35B1"
            font-weight="bold"
            font-size={16}
            align-self="stretch"
            cursor="pointer"
            transition="background 200ms linear"
            border-radius={4}
            display="flex"
            align-items="center"
            justify-content="center"
            margin-top={20}
            padding="15px 25px"
            $css={{
              "&:hover": {
                background: "#5E35B133",
              },
            }}
            onClick={() => setShowWTF(true)}
          >
            wtf?
          </$.div>
        </$.div>
        <$.div flex="1 1 100%" display="flex" flex-direction="column" padding="0 20px 20px">
          <$.div flex="1 1 50%" margin-bottom={20}>
            <$.textarea
              value={plain}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                setPlain(e.target.value);
                setEmoji(encodji(e.target.value));
              }}
              width="100%"
              height="100%"
              border-radius={15}
              padding="20px"
              font-size={18}
            />
          </$.div>
          <$.div flex="1 1 50%">
            <$.textarea
              value={emoji}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                setPlain(decodji(e.target.value));
                setEmoji(removeNonEmoji(e.target.value));
              }}
              width="100%"
              height="100%"
              border-radius={15}
              padding="20px"
              font-size={22}
            />
          </$.div>
        </$.div>

        <$.div
          position="fixed"
          bottom={0}
          right={40}
          background="#e8e8e8"
          color="#666"
          font-size={14}
          padding="10px 15px"
          border-radius="8px 8px 0 0"
        >
          characters: {plain.length}
          <$.span margin="0 8px">/</$.span>
          graphemes: {splitter.splitGraphemes(emoji).length} (
          {Math.round((splitter.splitGraphemes(emoji).length / plain.length) * 100)}
          %)
          <$.span margin="0 8px">/</$.span>
          encodji bytes: {emoji.length} ({Math.round((emoji.length / plain.length) * 100)}%)
        </$.div>

        <$.div
          position="fixed"
          display="flex"
          flex-direction="column"
          align-items="center"
          justify-content="flex-start"
          background="#0008"
          width="100vw"
          height="100vh"
          padding="30px 0"
          overflow="scroll"
          opacity={showWTF ? 1 : 0}
          pointer-events={showWTF ? "auto" : "none"}
          transition="opacity 150ms ease-out"
        >
          <$.div
            background="#FFF"
            border-radius={20}
            box-shadow="0 10px 30px #0008"
            width={600}
            maxWidth="100%"
            padding={40}
            line-height={1.4}
            position="relative"
            transform={showWTF ? "scale(1)" : "scale(0.9)"}
            transition="transform 150ms ease-out"
          >
            <$.div
              position="absolute"
              top={10}
              right={10}
              border-radius={4}
              cursor="pointer"
              display="flex"
              align-items="center"
              justify-content="center"
              width={50}
              height={50}
              line-height={1}
              onClick={() => setShowWTF(false)}
            >
              ❌
            </$.div>
            <$.h3 color="#5E35B1" font-size={30} margin-bottom={20}>
              wtf is encodji?
            </$.h3>
            <$.p margin-bottom={10}>
              <b>encodji</b> (pronounced "encode-jee"; a portmanteau of "encode emoji") is an
              encoding of text or binary data that only uses emoji characters. It is not encryption
              (it is easily reversible, by design), and not compression (it causes roughly 300%
              overhead of the original data length). Interestingly, while it does reduce the number
              of graphemes (visually distinct characters) by around 30%, it should be considered
              completely useless.
            </$.p>
            <$.p margin-bottom={10}>
              The encodji algorithm is similar to Base64. In fact, it might be more accurately named
              Base{allEmojis.length}, as it performs the same algorithm, but using{" "}
              {allEmojis.length} emoji characters instead of 64 printable text characters.
            </$.p>
            <$.p margin-bottom={30}>
              This site was created as a hackathon-style* project to explore various technologies
              such as UTF-8, Base64, and multi-byte character encodings. The code is open source
              (MIT) and is located on GitHub, so please feel free to explore, fork, modify,
              contribute, or steal it.
            </$.p>

            <$.p font-size={14} color="#0006">
              *assuming your definition of "hackathon" includes one person sitting at home on the
              weekend writing code.
            </$.p>
          </$.div>
        </$.div>
      </$.div>
    </StylixProvider>
  );
}
