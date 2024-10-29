import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../constants/messages.js';
import { Validator } from '../utils/validator.js';

export class InputView {
	constructor() {
		this.validator = new Validator();
	}
	async getPurchaseCost() {
		const input = await Console.readLineAsync(MESSAGE.COST_MESSAGE);
		if (this.validator.isValidCost(input)) {
			return Number(input);
		}
	}
}
