# encodji

**encodji** (pronounced "encode-jee"; a portmanteau of "encode emoji") is an encoding of text or
binary data that only uses emoji characters. It is not encryption (it is easily reversible, by
design), and not compression (it causes roughly 300% overhead of the original data length).
Interestingly, while it does reduce the number of graphemes (visually distinct characters) by around
30%, it should be considered completely useless.

The encodji algorithm is similar to Base64. In fact, it might be more accurately named Base3294, as
it performs the same algorithm, but using 3294 emoji characters instead of 64 printable text
characters.

This site was created as a hackathon-style\* project to explore various technologies such as UTF-8,
Base64, and multi-byte character encodings. The code is open source (MIT) and is located on GitHub,
so please feel free to explore, fork, modify, contribute, or steal it.

\*assuming your definition of "hackathon" includes one person sitting at home on the weekend writing
code.

## License

MIT

Copyright 2022 Alex Brombal

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
associated documentation files (the "Software"), to deal in the Software without restriction,
including without limitation the rights to use, copy, modify, merge, publish, distribute,
sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial
portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT
NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES
OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
