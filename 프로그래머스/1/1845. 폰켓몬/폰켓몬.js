function solution(nums) {
    const max = nums.length/2;
    const sets = new Set(nums);
    const species = sets.size;
    
    if (species <= max) {
        return species;
    }

    return max;
}