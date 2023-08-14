export function useTimeHook(nums){
	let hh = Math.floor(nums / 60)
	let mm = nums % 60

	return `${hh}hr ${mm}mins`
}