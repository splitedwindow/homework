function getTriangleSquare(a, b, c) {
  let p = (a + b + c) / 2;
  let S = Math.sqrt(p * (p - a) * (p - b) * (p - c));
  return S;
}
