export default function destructor(character) {
  const result = [];
  for (let index = 0; index < character.special.length; index += 1) {
    const charSpec = {};
    Object.assign(charSpec, character.special[index]);
    if (charSpec.description === undefined) {
      charSpec.description = 'Описание недоступно';
    }
    result.push(charSpec);
  }
  return result;
}
