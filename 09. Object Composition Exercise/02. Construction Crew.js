function constructionCrew(object) {
    if (object.handsShaking){
        object.bloodAlcoholLevel += 0.1 * object.weight * object.experience;
        object.handsShaking = false;
    }
    return object;
}